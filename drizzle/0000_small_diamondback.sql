CREATE TABLE IF NOT EXISTS "faqs" (
	"id" uuid PRIMARY KEY NOT NULL,
	"question" text NOT NULL,
	"response" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "globals" (
	"id" uuid PRIMARY KEY NOT NULL,
	"icon" text,
	"description" text NOT NULL,
	"facebook" text NOT NULL,
	"instagram" text NOT NULL,
	"x" text NOT NULL,
	"linkedin" text NOT NULL,
	"adress" text NOT NULL,
	"phone" text NOT NULL,
	"email" text NOT NULL,
	"lng" numeric,
	"lat" numeric,
	"getInTouchText" text NOT NULL,
	"ourVisionTitle" text NOT NULL,
	"visionDescription" text NOT NULL,
	"missionDescription" text NOT NULL,
	"heroTitle" text NOT NULL,
	"heroDescription" text NOT NULL,
	"heroImage" text NOT NULL,
	"whyUsTitle" text NOT NULL,
	"whyUsImage" text NOT NULL,
	"whyUsDescription" text NOT NULL,
	"aboutSectionTitle" text NOT NULL,
	"aboutSectionDescription" text NOT NULL,
	"aboutSectionImage" text NOT NULL,
	"aboutTeamDescription" text NOT NULL,
	"serviceTitle" text NOT NULL,
	"servicesDescrption" text NOT NULL,
	"howWeWorkTitle" text NOT NULL,
	"howWeWorkImage" text NOT NULL,
	"howWeWorkDescription" text NOT NULL,
	"docsLink" text DEFAULT '',
	"ctaTitle" text DEFAULT '',
	"ctaDescription" text DEFAULT '',
	"faqSectionTitle" text DEFAULT '',
	"faqSectionDescription" text DEFAULT ''
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "members" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"image" text NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "reasons" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"image" text NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "services" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"image" text NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"password" text NOT NULL,
	"email" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "banners" (
	"id" uuid PRIMARY KEY NOT NULL,
	"about" text NOT NULL,
	"service" text NOT NULL,
	"contact" text NOT NULL,
	"blog" text NOT NULL,
	"team" text NOT NULL,
	"cta" text DEFAULT ''
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "unique_idx" ON "users" ("email");