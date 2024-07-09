CREATE TABLE `users` (
	`user_id` int AUTO_INCREMENT NOT NULL,
	`first_name` varchar(25),
	`last_name` varchar(25),
	`email` varchar(25) NOT NULL,
	`account` varchar(11) NOT NULL,
	CONSTRAINT `users_user_id` PRIMARY KEY(`user_id`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
