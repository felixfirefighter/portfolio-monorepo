import { ProductList } from '@/features/shell/components/product-list';
import { useGetProductsQuery } from '@repo/api-ecommerce';

interface Props {
  productId: string;
  collectionId: string;
}

export const RelatedProductsSection: React.FC<Props> = (props) => {
  const { productId, collectionId } = props;
  const { data, isFetching } = useGetProductsQuery({
    productIdToExclude: productId,
    collectionId,
  });

  console.log('data', data);
  return <ProductList data={data} isFetching={isFetching} />;
};
