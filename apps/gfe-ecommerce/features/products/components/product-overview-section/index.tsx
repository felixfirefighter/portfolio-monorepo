import { ProductOverviewDetails } from '@/features/products/components/product-overview-details';
import { ProductOverviewSectionSkeleton } from '@/features/products/components/product-overview-section/skeleton';
import { ProductSpecSection } from '@/features/products/components/product-spec-section';
import { RelatedProductsSection } from '@/features/products/components/related-products-section';
import type { ProductRouteParam } from '@/features/shell/types/routes';
import { useGetProductOverviewQuery } from '@repo/api-ecommerce';
import { useParams } from 'next/navigation';

export const ProductOverviewSection = () => {
  const { id } = useParams<ProductRouteParam>();

  const { data, isFetching } = useGetProductOverviewQuery({
    productId: id,
  });

  if (isFetching || !data) {
    return <ProductOverviewSectionSkeleton />;
  }

  return (
    <>
      <ProductOverviewDetails details={data} />
      <ProductSpecSection />
      {data.collectionId && (
        <RelatedProductsSection
          productId={id}
          collectionId={data.collectionId}
        />
      )}
    </>
  );
};
