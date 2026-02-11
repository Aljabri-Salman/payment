CREATE TABLE `events` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`event_type` text NOT NULL,
	`payload` text NOT NULL,
	`source` text,
	`received_at` integer DEFAULT (strftime('%s', 'now')),
	`processed` integer DEFAULT 0,
	`processed_at` integer
);
