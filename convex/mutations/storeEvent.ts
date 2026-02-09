// !This is to be done on go service and stored in a separate database, but for simplicity we are doing it here for now.
import { mutation } from "../_generated/server";
import { paymentEventValidator } from "../validators";
import { safeExecute, ErrorCodes } from "../lib/errors";

export const storeEvent = mutation({
  args: paymentEventValidator,
  handler: async (ctx, args) => {
    return await safeExecute(async () => {
      const eventId = await ctx.db.insert("paymentEvents", {
        merchantId: args.merchantId,
        gateway: args.gateway,
        eventType: args.eventType,
        paymentId: args.paymentId,
        orderId: args.orderId,
        amount: args.amount,
        currency: args.currency,
        status: args.status,
        rawPayload: args.rawPayload,
        receivedAt: args.receivedAt,
        idempotencyKey: args.idempotencyKey,
      });

      return eventId;
    }, ErrorCodes.DATABASE_ERROR);
  },
});