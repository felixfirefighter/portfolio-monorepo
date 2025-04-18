import { ProductList } from '@/features/shell/components/product-list';
import { useGetProductsQuery } from '@repo/api-ecommerce';

export const ProductsSectionList = () => {
  const { data, isFetching } = useGetProductsQuery({});
  return <ProductList data={data} isFetching={isFetching} />;
};
