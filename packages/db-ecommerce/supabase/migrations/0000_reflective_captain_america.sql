CREATE TABLE "cart" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"product_variant_id" integer NOT NULL,
	"quantity" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "categories_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "collections" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"image_url" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "collections_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "coupons" (
	"id" serial PRIMARY KEY NOT NULL,
	"code" text NOT NULL,
	"discount" numeric NOT NULL,
	"valid_until" timestamp,
	CONSTRAINT "coupons_code_unique" UNIQUE("code")
);
--> statement-breakpoint
CREATE TABLE "inventory" (
	"id" serial PRIMARY KEY NOT NULL,
	"sku" text NOT NULL,
	"product_id" text NOT NULL,
	"stock" integer DEFAULT 0 NOT NULL,
	"sold" integer DEFAULT 0 NOT NULL,
	"reserved" integer DEFAULT 0 NOT NULL,
	"sale_price" integer DEFAULT 0 NOT NULL,
	"discount" integer,
	"list_price" integer DEFAULT 0 NOT NULL,
	"discount_percentage" integer,
	"size" varchar(20),
	"color" varchar(50),
	CONSTRAINT "inventory_sku_unique" UNIQUE("sku")
);
--> statement-breakpoint
CREATE TABLE "order_coupons" (
	"order_id" integer NOT NULL,
	"coupon_id" integer NOT NULL,
	CONSTRAINT "order_coupons_order_id_coupon_id_pk" PRIMARY KEY("order_id","coupon_id")
);
--> statement-breakpoint
CREATE TABLE "order_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"order_id" integer NOT NULL,
	"product_variant_id" integer NOT NULL,
	"quantity" integer NOT NULL,
	"price" numeric NOT NULL
);
--> statement-breakpoint
CREATE TABLE "orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"total_amount" numeric NOT NULL,
	"status" text DEFAULT 'pending',
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "product_images" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_id" text NOT NULL,
	"image_url" text NOT NULL,
	"color" varchar(50)
);
--> statement-breakpoint
CREATE TABLE "product_info" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_id" text,
	"title" text NOT NULL,
	"description" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "product_reviews" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_id" text NOT NULL,
	"user_id" text NOT NULL,
	"rating" integer DEFAULT 5 NOT NULL,
	"content" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "product_variants" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_id" integer NOT NULL,
	"sku" text NOT NULL,
	"variant_name" text NOT NULL,
	CONSTRAINT "product_variants_sku_unique" UNIQUE("sku")
);
--> statement-breakpoint
CREATE TABLE "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_id" text NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"category_id" integer,
	"collection_id" integer,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "products_product_id_unique" UNIQUE("product_id")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"name" text,
	"avatar_url" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "users_user_id_unique" UNIQUE("user_id")
);
--> statement-breakpoint
ALTER TABLE "cart" ADD CONSTRAINT "cart_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cart" ADD CONSTRAINT "cart_product_variant_id_product_variants_id_fk" FOREIGN KEY ("product_variant_id") REFERENCES "public"."product_variants"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "inventory" ADD CONSTRAINT "inventory_product_id_products_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("product_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "order_coupons" ADD CONSTRAINT "order_coupons_order_id_orders_id_fk" FOREIGN KEY ("order_id") REFERENCES "public"."orders"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "order_coupons" ADD CONSTRAINT "order_coupons_coupon_id_coupons_id_fk" FOREIGN KEY ("coupon_id") REFERENCES "public"."coupons"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_order_id_orders_id_fk" FOREIGN KEY ("order_id") REFERENCES "public"."orders"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_product_variant_id_product_variants_id_fk" FOREIGN KEY ("product_variant_id") REFERENCES "public"."product_variants"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "orders" ADD CONSTRAINT "orders_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_images" ADD CONSTRAINT "product_images_product_id_products_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("product_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_info" ADD CONSTRAINT "product_info_product_id_products_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("product_id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "product_reviews" ADD CONSTRAINT "product_reviews_product_id_products_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("product_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_reviews" ADD CONSTRAINT "product_reviews_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "product_variants" ADD CONSTRAINT "product_variants_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "products_collection_id_collections_id_fk" FOREIGN KEY ("collection_id") REFERENCES "public"."collections"("id") ON DELETE no action ON UPDATE no action;