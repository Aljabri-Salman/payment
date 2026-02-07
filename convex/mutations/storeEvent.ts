import { mutation } from "../_generated/server";
import { paymentEventValidator } from "../validators";

export const storeEvent = mutation({
  args: paymentEventValidator,
  handler: async (ctx, args) => {
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
  },
});
