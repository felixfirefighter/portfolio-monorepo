ALTER TABLE "product_reviews" DROP CONSTRAINT "product_reviews_user_id_users_user_id_fk";
--> statement-breakpoint
ALTER TABLE "product_reviews" DROP COLUMN "user_id";