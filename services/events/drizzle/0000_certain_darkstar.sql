CREATE TABLE "gateway_connections" (
	"_id" text PRIMARY KEY NOT NULL,
	"merchant_id" text NOT NULL,
	"gateway" text NOT NULL,
	"webhook_secret_encrypted" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "merchants" (
	"_id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"status" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "replication_events" (
	"_id" text PRIMARY KEY NOT NULL,
	"seq" integer NOT NULL,
	"table_name" text NOT NULL,
	"operation" text NOT NULL,
	"document_id" text NOT NULL,
	"document_data" jsonb,
	"creation_time" timestamp,
	"replicated_at" timestamp DEFAULT now() NOT NULL,
	"processed" boolean DEFAULT false,
	"error" text,
	"retry_count" integer DEFAULT 0,
	CONSTRAINT "replication_events_seq_unique" UNIQUE("seq")
);
--> statement-breakpoint
ALTER TABLE "gateway_connections" ADD CONSTRAINT "gateway_connections_merchant_id_merchants__id_fk" FOREIGN KEY ("merchant_id") REFERENCES "public"."merchants"("_id") ON DELETE cascade ON UPDATE no action;