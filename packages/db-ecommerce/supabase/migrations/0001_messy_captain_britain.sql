ALTER TABLE "inventory" ALTER COLUMN "size" SET DATA TYPE varchar(20);--> statement-breakpoint
ALTER TABLE "inventory" ALTER COLUMN "size" DROP NOT NULL;--> statement-breakpoint
DROP TYPE "public"."size";