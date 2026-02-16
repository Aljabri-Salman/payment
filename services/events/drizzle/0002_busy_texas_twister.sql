CREATE TABLE `gateway_connections` (
	`_id` text PRIMARY KEY NOT NULL,
	`merchant_id` text NOT NULL,
	`gateway` text NOT NULL,
	FOREIGN KEY (`merchant_id`) REFERENCES `merchants`(`_id`) ON UPDATE no action ON DELETE cascade
);
