'use client';

import { Button } from '@repo/design-system/components/ui/button';
import {} from '@repo/design-system/components/ui/card';
import Image from 'next/image';
import { useState } from 'react';

const images = [
  '/placeholder1.jpg',
  '/placeholder2.jpg',
  '/placeholder3.jpg',
  '/placeholder4.jpg',
];

const colors = [
  { name: 'Green', value: '#00b894' },
  { name: 'Brown', value: '#b28b5c' },
];

const sizes = ['XS', 'S', 'M', 'L', 'XL'];

export default function VoyagerHoodieCard() {
  const [selectedColor, setSelectedColor] = useState(colors[0].value);
  const [selectedSize, setSelectedSize] = useState('XS');
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container py-10">
      <div>
        <Image
          src={images[0]}
          alt="Voyager Hoodie"
          width={300}
          height={300}
          className="rounded-md object-cover"
        />
        <div className="mt-2 flex gap-2">
          {images.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={`Preview ${i + 1}`}
              width={50}
              height={50}
              className="cursor-pointer rounded-md border-2 border-muted object-cover hover:border-primary"
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-semibold text-lg">Voyager Hoodie</h2>
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl">$76</span>
          <span className="text-muted-foreground text-sm line-through">
            $95
          </span>
          <span className="font-medium text-green-600 text-sm">20% OFF</span>
        </div>
        <div className="mt-1 flex items-center gap-1 text-sm text-yellow-500">
          {/* <Star className="h-4 w-4 fill-yellow-500" /> */}
          <span>4.1</span>
          <a href="#" className="ml-1 text-blue-500 underline">
            See all 62 reviews
          </a>
        </div>
      </div>

      <p className="text-muted-foreground text-sm">
        The Voyager Hoodie is for the explorer at heart. Its durable fabric and
        roomy pockets are perfect for those who are always searching for the
        next adventure.
      </p>

      <div>
        <h4 className="mb-1 font-medium text-sm">Available Colors</h4>
        <div className="flex gap-2">
          {colors.map((color) => (
            <Button
              key={color.value}
              className={`h-6 w-6 rounded-full border-2 ${selectedColor === color.value ? 'border-black' : 'border-muted'}`}
              style={{ backgroundColor: color.value }}
              onClick={() => setSelectedColor(color.value)}
            />
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-1 font-medium text-sm">Available Sizes</h4>
        <div className="flex gap-2">
          {sizes.map((size) => (
            <Button
              key={size}
              className={`rounded border px-2 py-1 text-sm ${selectedSize === size ? 'border-black bg-muted' : 'border-muted-foreground'}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

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
}
