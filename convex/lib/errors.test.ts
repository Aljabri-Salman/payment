/**
 * Error Handling Tests
 * 
 * Tests for the error handling utilities.
 * Run with: npx convex run mutations.testEncryption.testEncryption
 */

import { 
  ConvexError, 
  NotFoundError, 
  ValidationError,
  AuthError,
  PermissionError,
  ConflictError,
  RateLimitError,
  ExternalServiceError,
  EncryptionError,
  DatabaseError,
  ErrorCodes,
  notFound,
  validationError,
  authError,
  permissionError,
  conflictError,
  rateLimitError,
  externalServiceError,
  encryptionError,
  databaseError,
  isConvexError,
  isErrorType,
  safeExecute,
  assert,
  assertDefined,
  assertExists,
  createErrorResponse,
  isErrorResponse
} from "./errors";

/**
 * Run all error handling tests.
 */
export async function runErrorTests(): Promise<{ success: boolean; message: string }> {
  const tests = [
    testConvexErrorClass,
    testSpecificErrorClasses,
    testErrorFactoryFunctions,
    testErrorHandlingUtilities,
    testAssertFunctions,
    testErrorResponseUtilities,
  ];

  const results = [];
  
  for (const test of tests) {
    try {
      const result = await test();
      results.push({ test: test.name, success: true, message: result });
    } catch (error) {
      results.push({ 
        test: test.name, 
        success: false, 
        message: error instanceof Error ? error.message : String(error) 
      });
    }
  }

  const failedTests = results.filter(r => !r.success);
  
  if (failedTests.length > 0) {
    return {
      success: false,
      message: `Failed ${failedTests.length}/${tests.length} tests: ${failedTests.map(t => t.test).join(', ')}`
    };
  }

  return {
    success: true,
    message: `All ${tests.length} error handling tests passed`
  };
}

/**
 * Test the base ConvexError class.
 */
async function testConvexErrorClass(): Promise<string> {
  // Test basic error creation
  const error = new ConvexError("Test error", ErrorCodes.VALIDATION_ERROR, { field: "test" });
  
  if (error.message !== "Test error") {
    throw new Error(`Expected message "Test error", got "${error.message}"`);
  }
  
  if (error.code !== ErrorCodes.VALIDATION_ERROR) {
    throw new Error(`Expected code "${ErrorCodes.VALIDATION_ERROR}", got "${error.code}"`);
  }
  
  if (error.details?.field !== "test") {
    throw new Error(`Expected details.field "test", got "${error.details?.field}"`);
  }
  
  if (error.name !== "ConvexError") {
    throw new Error(`Expected name "ConvexError", got "${error.name}"`);
  }
  
  // Test toJSON method
  const json = error.toJSON();
  if (json.message !== "Test error" || json.code !== ErrorCodes.VALIDATION_ERROR) {
    throw new Error("toJSON() returned incorrect data");
  }
  
  // Test fromError method
  const fromString = ConvexError.fromError("String error", ErrorCodes.INTERNAL_ERROR);
  if (!isConvexError(fromString) || fromString.message !== "String error") {
    throw new Error("fromError() failed with string");
  }
  
  const fromError = ConvexError.fromError(new Error("Original error"), ErrorCodes.AUTH_ERROR);
  if (!isConvexError(fromError) || fromError.code !== ErrorCodes.AUTH_ERROR) {
    throw new Error("fromError() failed with Error object");
  }
  
  const fromConvexError = ConvexError.fromError(error);
  if (fromConvexError !== error) {
    throw new Error("fromError() should return same ConvexError instance");
  }
  
  return "ConvexError class tests passed";
}

/**
 * Test specific error classes.
 */
async function testSpecificErrorClasses(): Promise<string> {
  // Test NotFoundError
  const notFoundError = new NotFoundError("User", "123");
  if (!isErrorType(notFoundError, NotFoundError) || notFoundError.code !== ErrorCodes.NOT_FOUND) {
    throw new Error("NotFoundError test failed");
  }
  
  // Test ValidationError
  const validationError = new ValidationError("Invalid input", "email", "invalid@");
  if (!isErrorType(validationError, ValidationError) || validationError.code !== ErrorCodes.VALIDATION_ERROR) {
    throw new Error("ValidationError test failed");
  }
  
  // Test AuthError
  const authError = new AuthError("Login required");
  if (!isErrorType(authError, AuthError) || authError.code !== ErrorCodes.AUTH_ERROR) {
    throw new Error("AuthError test failed");
  }
  
  // Test PermissionError
  const permissionError = new PermissionError("Admin required", "admin");
  if (!isErrorType(permissionError, PermissionError) || permissionError.code !== ErrorCodes.PERMISSION_ERROR) {
    throw new Error("PermissionError test failed");
  }
  
  // Test ConflictError
  const conflictError = new ConflictError("Duplicate resource", "user");
  if (!isErrorType(conflictError, ConflictError) || conflictError.code !== ErrorCodes.CONFLICT) {
    throw new Error("ConflictError test failed");
  }
  
  // Test RateLimitError
  const rateLimitError = new RateLimitError("Too many requests", 60);
  if (!isErrorType(rateLimitError, RateLimitError) || rateLimitError.code !== ErrorCodes.RATE_LIMIT) {
    throw new Error("RateLimitError test failed");
  }
  
  // Test ExternalServiceError
  const externalServiceError = new ExternalServiceError("Stripe", "API failure", 500);
  if (!isErrorType(externalServiceError, ExternalServiceError) || externalServiceError.code !== ErrorCodes.EXTERNAL_SERVICE_ERROR) {
    throw new Error("ExternalServiceError test failed");
  }
  
  // Test EncryptionError
  const encryptionError = new EncryptionError("Encryption failed", "encrypt");
  if (!isErrorType(encryptionError, EncryptionError) || encryptionError.code !== ErrorCodes.ENCRYPTION_ERROR) {
    throw new Error("EncryptionError test failed");
  }
  
  // Test DatabaseError
  const databaseError = new DatabaseError("Insert failed", "insert");
  if (!isErrorType(databaseError, DatabaseError) || databaseError.code !== ErrorCodes.DATABASE_ERROR) {
    throw new Error("DatabaseError test failed");
  }
  
  return "Specific error classes tests passed";
}

/**
 * Test error factory functions.
 */
async function testErrorFactoryFunctions(): Promise<string> {
  // Test notFound factory
  const nf = notFound("Product", "456");
  if (!isErrorType(nf, NotFoundError) || nf.code !== ErrorCodes.NOT_FOUND) {
    throw new Error("notFound() factory test failed");
  }
  
  // Test validationError factory
  const ve = validationError("Invalid", "price", -1);
  if (!isErrorType(ve, ValidationError) || ve.code !== ErrorCodes.VALIDATION_ERROR) {
    throw new Error("validationError() factory test failed");
  }
  
  // Test authError factory
  const ae = authError("Token expired");
  if (!isErrorType(ae, AuthError) || ae.code !== ErrorCodes.AUTH_ERROR) {
    throw new Error("authError() factory test failed");
  }
  
  // Test permissionError factory
  const pe = permissionError("Access denied", "write");
  if (!isErrorType(pe, PermissionError) || pe.code !== ErrorCodes.PERMISSION_ERROR) {
    throw new Error("permissionError() factory test failed");
  }
  
  // Test conflictError factory
  const ce = conflictError("Duplicate email", "user");
  if (!isErrorType(ce, ConflictError) || ce.code !== ErrorCodes.CONFLICT) {
    throw new Error("conflictError() factory test failed");
  }
  
  // Test rateLimitError factory
  const rle = rateLimitError("Slow down", 30);
  if (!isErrorType(rle, RateLimitError) || rle.code !== ErrorCodes.RATE_LIMIT) {
    throw new Error("rateLimitError() factory test failed");
  }
  
  // Test externalServiceError factory
  const ese = externalServiceError("PayPal", "Timeout", 408);
  if (!isErrorType(ese, ExternalServiceError) || ese.code !== ErrorCodes.EXTERNAL_SERVICE_ERROR) {
    throw new Error("externalServiceError() factory test failed");
  }
  
  // Test encryptionError factory
  const ence = encryptionError("Key not found", "decrypt");
  if (!isErrorType(ence, EncryptionError) || ence.code !== ErrorCodes.ENCRYPTION_ERROR) {
    throw new Error("encryptionError() factory test failed");
  }
  
  // Test databaseError factory
  const dbe = databaseError("Query failed", "select");
  if (!isErrorType(dbe, DatabaseError) || dbe.code !== ErrorCodes.DATABASE_ERROR) {
    throw new Error("databaseError() factory test failed");
  }
  
  return "Error factory functions tests passed";
}

/**
 * Test error handling utilities.
 */
async function testErrorHandlingUtilities(): Promise<string> {
  // Test isConvexError
  const convexError = new ConvexError("Test", ErrorCodes.INTERNAL_ERROR);
  const regularError = new Error("Regular");
  
  if (!isConvexError(convexError)) {
    throw new Error("isConvexError() should return true for ConvexError");
  }
  
  if (isConvexError(regularError)) {
    throw new Error("isConvexError() should return false for regular Error");
  }
  
  // Test isErrorType
  const notFoundError = new NotFoundError("Resource");
  
  if (!isErrorType(notFoundError, NotFoundError)) {
    throw new Error("isErrorType() should return true for correct error type");
  }
  
  if (isErrorType(notFoundError, ValidationError)) {
    throw new Error("isErrorType() should return false for incorrect error type");
  }
  
  // Test safeExecute with successful function
  const successResult = await safeExecute(async () => "success");
  if (successResult !== "success") {
    throw new Error("safeExecute() should return successful result");
  }
  
  // Test safeExecute with throwing function
  try {
    await safeExecute(async () => {
      throw new Error("Function failed");
    });
    throw new Error("safeExecute() should throw for failing function");
  } catch (error) {
    if (!isConvexError(error) || error.code !== ErrorCodes.INTERNAL_ERROR) {
      throw new Error("safeExecute() should wrap error in ConvexError");
    }
  }
  
  // Test safeExecute with custom error code
  try {
    await safeExecute(async () => {
      throw new Error("Custom error");
    }, ErrorCodes.VALIDATION_ERROR);
    throw new Error("safeExecute() should throw for failing function");
  } catch (error) {
    if (!isConvexError(error) || error.code !== ErrorCodes.VALIDATION_ERROR) {
      throw new Error("safeExecute() should use custom error code");
    }
  }
  
  return "Error handling utilities tests passed";
}

/**
 * Test assert functions.
 */
async function testAssertFunctions(): Promise<string> {
  // Test assert with true condition
  assert(true, "Should not throw");
  
  // Test assert with false condition
  try {
    assert(false, "Should throw", ErrorCodes.VALIDATION_ERROR);
  } catch (error) {
    if (!isConvexError(error) || error.code !== ErrorCodes.VALIDATION_ERROR) {
      throw new Error("assert() should throw ConvexError with correct code");
    }
  }
  
  // Test assertDefined with defined value
  const definedValue = "test";
  assertDefined(definedValue);
  
  // Test assertDefined with null
  try {
    assertDefined(null, "Value is null");
    throw new Error("assertDefined() should throw for null");
  } catch (error) {
    if (!isConvexError(error)) {
      throw new Error("assertDefined() should throw ConvexError");
    }
  }
  
  // Test assertDefined with undefined
  try {
    assertDefined(undefined, "Value is undefined");
    throw new Error("assertDefined() should throw for undefined");
  } catch (error) {
    if (!isConvexError(error)) {
      throw new Error("assertDefined() should throw ConvexError");
    }
  }
  
  // Test assertExists with existing resource
  const existingResource = { id: "123", name: "Test" };
  assertExists(existingResource, "Resource");
  
  // Test assertExists with null resource
  try {
    assertExists(null, "User", "123");
    throw new Error("assertExists() should throw for null resource");
  } catch (error) {
    if (!isErrorType(error, NotFoundError)) {
      throw new Error("assertExists() should throw NotFoundError");
    }
  }
  
  return "Assert functions tests passed";
}

/**
 * Test error response utilities.
 */
async function testErrorResponseUtilities(): Promise<string> {
  // Test createErrorResponse with ConvexError
  const convexError = new ConvexError("Test error", ErrorCodes.VALIDATION_ERROR, { field: "email" });
  const response1 = createErrorResponse(convexError);
  
  if (!isErrorResponse(response1)) {
    throw new Error("createErrorResponse() should return ErrorResponse");
  }
  
  if (response1.error.code !== ErrorCodes.VALIDATION_ERROR || response1.error.message !== "Test error") {
    throw new Error("createErrorResponse() should preserve error code and message");
  }
  
  // Test createErrorResponse with regular Error
  const regularError = new Error("Regular error");
  const response2 = createErrorResponse(regularError);
  
  if (!isErrorResponse(response2) || response2.error.code !== ErrorCodes.INTERNAL_ERROR) {
    throw new Error("createErrorResponse() should convert regular Error to ConvexError");
  }
  
  // Test createErrorResponse with string
  const response3 = createErrorResponse("String error");
  
  if (!isErrorResponse(response3) || response3.error.code !== ErrorCodes.INTERNAL_ERROR) {
    throw new Error("createErrorResponse() should convert string to ConvexError");
  }
  
  // Test isErrorResponse with valid response
  const validResponse: any = {
    success: false,
    error: {
      code: "TEST_CODE",
      message: "Test message"
    },
    timestamp: Date.now()
  };
  
  if (!isErrorResponse(validResponse)) {
    throw new Error("isErrorResponse() should return true for valid error response");
  }
  
  // Test isErrorResponse with invalid responses
  const invalidResponses = [
    { success: true, error: { code: "TEST", message: "Test" } }, // success: true
    { success: false, error: { code: 123, message: "Test" } }, // code not string
    { success: false, error: { code: "TEST", message: 123 } }, // message not string
    { success: false }, // missing error
    null,
    undefined,
    "string",
    123
  ];
  
  for (const invalid of invalidResponses) {
    if (isErrorResponse(invalid)) {
      throw new Error(`isErrorResponse() should return false for invalid response: ${JSON.stringify(invalid)}`);
    }
  }
  
  return "Error response utilities tests passed";
}