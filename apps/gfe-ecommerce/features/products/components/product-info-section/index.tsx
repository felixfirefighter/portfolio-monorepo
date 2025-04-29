import type { GetProductInfo } from '@repo/db-ecommerce/features/product-info/get-product-info';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@repo/design-system/components/ui/accordion';

type Props = {
  infoList: GetProductInfo[];
};

export const ProductInfoSection: React.FC<Props> = (props) => {
  const { infoList } = props;
  return (
    <section className="py-10">
      <Accordion type="multiple">
        {infoList.map((info) => (
          <AccordionItem key={info.title} value={`info-${info.title}`}>
            <AccordionTrigger className="font-medium text-lg hover:no-underline">
              {info.title}
            </AccordionTrigger>
            <AccordionContent className="text-base text-neutral-600">
              <ul className="list-disc pl-5">
                {info.description.map((item) => {
                  return <li key={item}>{item}</li>;
                })}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
