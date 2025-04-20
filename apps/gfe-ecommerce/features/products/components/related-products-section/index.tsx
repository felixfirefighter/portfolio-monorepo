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
    limit: 4,
  });

  return (
    <section className="container py-10">
      <h2 className="mb-8 font-semibold text-2xl">In this collection</h2>
      <ProductList data={data} isFetching={isFetching} />
    </section>
  );
};
