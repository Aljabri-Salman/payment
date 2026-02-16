CREATE TABLE `merchants` (
	`_id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`status` text NOT NULL
);
--> statement-breakpoint
DROP TABLE `events`;