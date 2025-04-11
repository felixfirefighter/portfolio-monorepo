import { ProductOverviewDetails } from '@/features/products/components/product-overview-details';
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

  return <ProductOverviewDetails details={data} />;
};
