import {
  formatCentsToDollars,
  formatPercentage,
  formatRating,
} from '@/features/store/utils/format';
import { RiCheckLine } from '@remixicon/react';
import type { ProductOverview } from '@repo/db-ecommerce';
import { Badge } from '@repo/design-system/components/ui/badge';
import { Button } from '@repo/design-system/components/ui/button';
import { NumberInput } from '@repo/design-system/components/ui/number-input';

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@repo/design-system/components/ui/carousel';
import { Rating } from '@repo/design-system/components/ui/rating';

import { ProductInfoSection } from '@/features/products/components/product-info-section';
import {
  ScrollArea,
  ScrollBar,
} from '@repo/design-system/components/ui/scroll-area';
import {} from '@repo/design-system/components/ui/tooltip';
import { cn } from '@repo/design-system/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
type Props = {
  details: ProductOverview;
};

export const ProductOverviewDetails: React.FC<Props> = (props) => {
  const { details } = props;
  const { images, availableColors, availableSizes, inventory } = details;

  const [api, setApi] = useState<CarouselApi>();
  const [selectedColor, setSelectedColor] = useState(availableColors[0]);
  const [selectedSize, setSelectedSize] = useState(availableSizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const selectedInventory = useMemo(() => {
    return inventory.find((item) => {
      return item.color === selectedColor && item.size === selectedSize;
    });
  }, [selectedSize, selectedColor, inventory]);

  const maxQuantity = useMemo(() => {
    if (!selectedInventory) {
      return 0;
    }
    return selectedInventory.stock;
  }, [selectedInventory]);

  useEffect(() => {
    if (!api) {
      return;
    }

    setSelectedImage(images[api.selectedScrollSnap()]);
    api.on('select', () => {
      setSelectedImage(images[api.selectedScrollSnap()]);
    });
  }, [api, images]);

  const handleImageClicked = (index: number) => {
    if (api) {
      api.scrollTo(index);
      setSelectedImage(images[index]);
    }
  };

  return (
    <div className="container py-10">
      <div className="lg:gap-8 xl:flex">
        <div className="xl:flex-1">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {images.map((img, index) => (
                <CarouselItem key={img.imageUrl}>
                  <Image
                    src={img.imageUrl}
                    alt={`Preview ${index + 1}`}
                    width={800}
                    height={800}
                    className="h-[400px] w-full rounded-md object-cover md:aspect-square md:h-auto"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex w-max gap-4 py-6">
              {images.map((img, index) => (
                <Image
                  key={index}
                  src={img.imageUrl}
                  alt={`Preview ${index + 1}`}
                  width={240}
                  height={240}
                  className={cn(
                    'h-32 w-20 cursor-pointer rounded-lg border-2 border-transparent object-cover lg:h-48 lg:w-48 xl:w-40',
                    {
                      'border-primary': selectedImage.imageUrl === img.imageUrl,
                    }
                  )}
                  onClick={() => handleImageClicked(index)}
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="hidden" />
          </ScrollArea>
        </div>

        <div className="xl:flex-1">
          <h1 className="mb-5 font-semibold text-3xl lg:mt-8 lg:text-5xl xl:mt-0">
            {details.name}
          </h1>
          <div className="mb-2 flex items-center gap-2">
            {selectedInventory && (
              <span className="font-medium text-3xl">
                {formatCentsToDollars(selectedInventory.salePrice)}
              </span>
            )}
            {selectedInventory?.discountPercentage && (
              <span className="font-medium text-lg text-muted-foreground line-through">
                {formatCentsToDollars(selectedInventory.listPrice)}
              </span>
            )}
          </div>
          {selectedInventory?.discountPercentage && (
            <div className="mb-3">
              <Badge
                variant={'outline'}
                className="rounded-full border-amber-200 bg-amber-50 p-2.5 py-1 font-normal text-amber-700 text-sm"
              >
                {formatPercentage(selectedInventory.discountPercentage)} OFF
              </Badge>
            </div>
          )}
          <div className="mt-1 flex items-center gap-2">
            <span className="text-xl">
              {formatRating(details.reviews.averageRating)}
            </span>
            <Rating rating={details.reviews.averageRating} />
            {details.reviews.reviewCount !== 0 && (
              <Link href="#" className="font-medium text-primary text-sm">
                See all {details.reviews.reviewCount} reviews
              </Link>
            )}
          </div>

          <p className="py-8 text-base text-neutral-600">
            {details.description}
          </p>

          {availableColors.length > 0 && (
            <div className="mb-8">
              <h4 className="mb-4 text-neutral-500 text-sm">
                Available Colors
              </h4>
              <div className="flex gap-4">
                {availableColors.map((color) => {
                  const inventoryItem = inventory.find((item) => {
                    return item.color === color && item.size === selectedSize;
                  });
                  return (
                    <Button
                      key={color}
                      variant="ghost"
                      className={cn('h-10 w-10 rounded-full border-2 p-0.5 ', {
                        'border-primary': selectedColor === color,
                        'border-neutral-100': selectedColor !== color,
                      })}
                      disabled={inventoryItem?.stock === 0}
                      onClick={() => setSelectedColor(color)}
                    >
                      <div
                        className="flex h-full w-full items-center justify-center rounded-full"
                        style={{ backgroundColor: color }}
                      >
                        {selectedColor === color && (
                          <RiCheckLine color="white" />
                        )}
                      </div>
                    </Button>
                  );
                })}
              </div>
            </div>
          )}

          {availableSizes.length > 0 && (
            <div className="mb-8">
              <h4 className="mb-4 text-neutral-500 text-sm">Available Sizes</h4>
              <div className="flex flex-wrap gap-2">
                {availableSizes.map((size) => {
                  const inventoryItem = inventory.find((item) => {
                    return item.size === size && item.color === selectedColor;
                  });
                  return (
                    <Button
                      key={size}
                      variant={'outline'}
                      className={cn(
                        'h-12 w-16 rounded font-medium text-base uppercase hover:bg-white',
                        {
                          'border-primary': selectedSize === size,
                        }
                      )}
                      disabled={inventoryItem?.stock === 0}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </Button>
                  );
                })}
              </div>
            </div>
          )}

          <div className="mb-8">
            <h4 className="mb-4 text-neutral-500 text-sm">Quantity</h4>
            <div className="flex items-center gap-2">
              <NumberInput
                value={quantity}
                onChange={setQuantity}
                min={1}
                max={maxQuantity}
              />
            </div>
          </div>

          <Button
            className="w-full"
            size={'lg'}
            disabled={selectedInventory?.stock === 0}
          >
            Add to Cart
          </Button>

          <ProductInfoSection infoList={details.productInfo} />
        </div>
      </div>
    </div>
  );
};
