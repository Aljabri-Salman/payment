const isDevelopment = process.env.NODE_ENV === "development";

type LogLevel = "info" | "error" | "warn" | "debug";

class WebhookLogger {
  private prefix = "[Webhook]";

  info(message: string, ...args: any[]) {
    if (isDevelopment) {
      console.log(`${this.prefix} ℹ️ ${message}`, ...args);
    }
  }

  error(message: string, ...args: any[]) {
    console.error(`${this.prefix} ❌ ${message}`, ...args);
  }

  warn(message: string, ...args: any[]) {
    if (isDevelopment) {
      console.warn(`${this.prefix} ⚠️ ${message}`, ...args);
    }
  }

  debug(message: string, ...args: any[]) {
    if (isDevelopment) {
      console.debug(`${this.prefix} 🔍 ${message}`, ...args);
    }
  }

  success(message: string, ...args: any[]) {
    if (isDevelopment) {
      console.log(`${this.prefix} ✓ ${message}`, ...args);
    }
  }

  // Always log critical events
  critical(message: string, ...args: any[]) {
    console.error(`${this.prefix} 🚨 CRITICAL: ${message}`, ...args);
  }
}

export const logger = new WebhookLogger();
