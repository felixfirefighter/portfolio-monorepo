import {
  formatCentsToDollars,
  formatPercentage,
  formatRating,
} from '@/features/store/utils/format';
import { RiCheckLine } from '@remixicon/react';
import type { ProductOverview } from '@repo/db-ecommerce';
import { Badge } from '@repo/design-system/components/ui/badge';
import { Button } from '@repo/design-system/components/ui/button';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@repo/design-system/components/ui/carousel';
import { Rating } from '@repo/design-system/components/ui/rating';

import {
  ScrollArea,
  ScrollBar,
} from '@repo/design-system/components/ui/scroll-area';
import { cn } from '@repo/design-system/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
type Props = {
  details: ProductOverview;
};

export const ProductOverviewDetails: React.FC<Props> = (props) => {
  const { details } = props;
  const { images, availableColors, availableSizes, inventory } = details;

  const [api, setApi] = useState<CarouselApi>();
  const [selectedColor, setSelectedColor] = useState(availableSizes[0]);
  const [selectedSize, setSelectedSize] = useState(availableSizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedInventory, setSelectedInventory] = useState(inventory[0]);

  console.log('details', details);

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
      <div className="lg:flex lg:gap-8">
        <div>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              <Image
                src={selectedImage.imageUrl}
                alt={details.name}
                width={400}
                height={400}
                className="rounded-md object-cover"
              />
              {images.map((img, index) => (
                <CarouselItem key={index}>
                  <Image
                    key={img.imageUrl}
                    src={img.imageUrl}
                    alt={`Preview ${index + 1}`}
                    width={400}
                    height={400}
                    className="h-[400px] w-full rounded-md object-cover"
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
                  width={120}
                  height={120}
                  className={cn(
                    'h-32 w-20 cursor-pointer rounded-lg border-2 border-transparent object-cover',
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

        <div>
          <h1 className="mb-5 font-semibold text-3xl">{details.name}</h1>
          <div className="mb-2 flex items-center gap-2">
            <span className="font-medium text-3xl">
              {formatCentsToDollars(selectedInventory.salePrice)}
            </span>
            {selectedInventory.discountPercentage && (
              <span className="font-medium text-lg text-muted-foreground line-through">
                {formatCentsToDollars(details.inventory[0].listPrice)}
              </span>
            )}
          </div>
          {selectedInventory.discountPercentage && (
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
            {details.reviews.reviewCount && (
              <Link href="#" className="font-medium text-primary text-sm">
                See all {details.reviews.reviewCount} reviews
              </Link>
            )}
          </div>
        </div>
      </div>

      <p className="py-8 text-neutral-600">{details.description}</p>

      {availableColors.length > 0 && (
        <div className="mb-8">
          <h4 className="mb-4 font-medium text-sm">Available Colors</h4>
          <div className="flex gap-4">
            {availableColors.map((color) => (
              <Button
                key={color}
                variant="ghost"
                className={cn('h-10 w-10 rounded-full border-2 p-0.5', {
                  'border-primary': selectedColor === color,
                  'border-neutral-100': selectedColor !== color,
                })}
                onClick={() => setSelectedColor(color)}
              >
                <div
                  className="flex h-full w-full items-center justify-center rounded-full"
                  style={{ backgroundColor: color }}
                >
                  {selectedColor === color && <RiCheckLine color="white" />}
                </div>
              </Button>
            ))}
          </div>
        </div>
      )}

      {availableSizes.length > 0 && (
        <div>
          <h4 className="text-neutral-500 text-sm">Available Sizes</h4>
          <div className="flex gap-2">
            {availableSizes.map((size) => (
              <Button
                key={size}
                className={cn('rounded border px-2 py-1 text-sm', {
                  'border-black bg-muted': selectedSize === size,
                  'border-muted-foreground': selectedSize !== size,
                })}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </Button>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
        >
          -
        </Button>
        <span>{quantity}</span>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </Button>
      </div>

      <Button className="w-full">Add to Cart</Button>
    </div>
  );
};
