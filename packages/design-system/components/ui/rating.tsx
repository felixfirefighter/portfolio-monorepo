import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@repo/design-system/lib/utils'; // Your ShadCN utility for classnames

interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The rating value (e.g., 4.1, 3, 5) */
  rating: number;
  /** The maximum rating possible (determines the number of stars) */
  maxRating?: number;
  /** Size of the star icons in pixels */
  starSize?: number;
  /** Color class for filled stars (Tailwind CSS class) */
  filledColor?: string;
   /** Color class for empty stars (Tailwind CSS class) */
  emptyColor?: string;
}

const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      rating,
      maxRating = 5,
      starSize = 20, // Default size (h-4 w-4 in Tailwind)
      filledColor = 'text-yellow-400 fill-yellow-400', // Default filled color
      emptyColor = 'text-gray-300 fill-gray-300', // Default empty color
      className,
      ...props
    },
    ref
  ) => {
    // Ensure rating is within bounds
    const clampedRating = Math.max(0, Math.min(rating, maxRating));

    return (
      <div
        ref={ref}
        className={cn('flex items-center space-x-0.5', className)} // Add slight space between stars if desired
        role="img" // Indicate this div represents an image/graphic
        aria-label={`Rating: ${clampedRating.toFixed(1)} out of ${maxRating} stars`} // Accessibility label
        {...props}
      >
        {[...Array(maxRating)].map((_, index) => {
          const starValue = index + 1;
          // Determine if the current star should be filled
          const isFilled = clampedRating >= starValue;

          return (
            <Star
              key={index}
              size={starSize}
              className={cn(
                'stroke-1 flex-shrink-0', // Prevent shrinking in flex container
                isFilled ? filledColor : emptyColor,
              )}
            />
          );
        })}
      </div>
    );
  }
);

Rating.displayName = 'Rating';

export { Rating };