CREATE TABLE "product_info" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_id" text,
	"title" text NOT NULL,
	"description" jsonb NOT NULL
);
--> statement-breakpoint
ALTER TABLE "product_info" ADD CONSTRAINT "product_info_product_id_products_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("product_id") ON DELETE cascade ON UPDATE cascade;