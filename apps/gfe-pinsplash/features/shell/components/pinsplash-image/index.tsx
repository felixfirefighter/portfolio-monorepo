import type { UnsplashPhoto } from '@repo/api-unsplash';
import { useWindowSize } from '@uidotdev/usehooks';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BREAKPOINTS } from '../../config/breakpoints';

interface Props {
  photo: UnsplashPhoto;
}

export const PinsplashImage: React.FC<Props> = (props) => {
  const {
    photo: { urls, alt_description, width, height, color },
  } = props;
  const size = useWindowSize();
  const [isAboveFold, setIsAboveFold] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current) {
      return;
    }

    const rect = imgRef.current?.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setIsAboveFold(true);
    }
  }, []);

  const getOptimalImageUrl = () => {
    if (!size?.width) {
      return urls.full;
    }

    if (size.width <= BREAKPOINTS.sm) {
      return urls.thumb;
    }
    if (size.width <= BREAKPOINTS.md) {
      return urls.small;
    }
    if (size.width <= BREAKPOINTS.lg) {
      return urls.regular;
    }
    return urls.full;
  };

  return (
    <Image
      ref={imgRef}
      src={getOptimalImageUrl()}
      alt={alt_description || ''}
      width={width}
      height={height}
      loading={isAboveFold ? 'eager' : 'lazy'}
      priority={isAboveFold}
      className="rounded-xl"
      style={{ background: color }}
    />
  );
};
