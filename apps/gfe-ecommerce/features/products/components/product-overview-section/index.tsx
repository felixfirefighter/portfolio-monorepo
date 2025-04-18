import { ProductInfoSection } from '@/features/products/components/product-info-section';
import { ProductOverviewDetails } from '@/features/products/components/product-overview-details';
import { ProductSpecSection } from '@/features/products/components/product-spec-section';
import { RelatedProductsSection } from '@/features/products/components/related-products-section';
import type { ProductRouteParam } from '@/features/shell/types/routes';
import { useGetProductOverviewQuery } from '@repo/api-ecommerce';
import { useParams } from 'next/navigation';

export const ProductOverviewSection = () => {
  const { id } = useParams<ProductRouteParam>();

  const { data, isFetching, error } = useGetProductOverviewQuery({
    productId: id,
  });

  if (isFetching || !data) {
    return null;
  }

  return (
    <>
      <ProductOverviewDetails details={data} />
      <ProductInfoSection infoList={data.productInfo} />
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
