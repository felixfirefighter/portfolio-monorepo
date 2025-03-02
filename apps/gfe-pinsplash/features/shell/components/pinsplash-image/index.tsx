import type { UnsplashPhoto } from '@repo/api-unsplash';
import { useHover, useWindowSize } from '@uidotdev/usehooks';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BREAKPOINTS } from '../../config/breakpoints';

interface Props {
  photo: UnsplashPhoto;
}

export const PinsplashImage: React.FC<Props> = (props) => {
  const {
    photo: { urls, alt_description, width, height, color, user, description },
  } = props;
  const size = useWindowSize();
  const [ref, hovering] = useHover();

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
    <div className="relative" ref={ref}>
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
      {hovering && (
        <>
          <div className="absolute bottom-0 left-0 z-10 h-full w-full rounded-xl bg-black opacity-20" />
          <div className="absolute right-2 bottom-2 left-2 z-20 flex items-center gap-2 text-xs">
            <Image
              width={32}
              height={32}
              src={user.profile_image.small}
              alt={user.name}
              className="flex-shrink-0 rounded-full"
            />
            <p className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-white">
              {alt_description || description}
            </p>
          </div>
        </>
      )}
    </div>
  );
};
