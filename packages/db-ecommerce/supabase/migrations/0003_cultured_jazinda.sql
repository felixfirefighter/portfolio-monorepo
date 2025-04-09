ALTER TABLE "collections" ADD COLUMN "collection_id" text;--> statement-breakpoint
ALTER TABLE "collections" ADD CONSTRAINT "collections_collection_id_unique" UNIQUE("collection_id");