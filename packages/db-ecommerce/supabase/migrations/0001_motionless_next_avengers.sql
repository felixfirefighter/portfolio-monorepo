ALTER TABLE "product_images" DROP CONSTRAINT "product_images_variant_sku_product_variants_sku_fk";
--> statement-breakpoint
ALTER TABLE "product_images" ADD COLUMN "color" varchar(50);--> statement-breakpoint
ALTER TABLE "product_images" DROP COLUMN "variant_sku";