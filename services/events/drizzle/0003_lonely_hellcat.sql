CREATE TABLE `replication_events` (
	`_id` text PRIMARY KEY NOT NULL,
	`seq` integer NOT NULL,
	`table_name` text NOT NULL,
	`operation` text NOT NULL,
	`document_id` text NOT NULL,
	`document_data` text,
	`creation_time` integer,
	`replicated_at` integer NOT NULL,
	`processed` integer DEFAULT false,
	`error` text,
	`retry_count` integer DEFAULT 0
);
--> statement-breakpoint
CREATE UNIQUE INDEX `replication_events_seq_unique` ON `replication_events` (`seq`);