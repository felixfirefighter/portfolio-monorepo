ALTER TABLE "products" DROP CONSTRAINT "products_category_id_categories_id_fk";
--> statement-breakpoint
ALTER TABLE "products" DROP CONSTRAINT "products_collection_id_collections_id_fk";
--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "category_id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "collection_id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_categories_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("category_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "products_collection_id_collections_collection_id_fk" FOREIGN KEY ("collection_id") REFERENCES "public"."collections"("collection_id") ON DELETE no action ON UPDATE no action;