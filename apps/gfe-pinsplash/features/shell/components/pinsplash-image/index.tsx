import {
  getOptimalImageUrl,
  getOptimalImageUrlForProfilePic,
  getOptimalSizeForMasonryImage,
} from '@/features/shell/utils/image';
import type { UnsplashPhoto } from '@repo/api-unsplash';
import { Button } from '@repo/design-system/components/ui/button';
import { useHover, useWindowSize } from '@uidotdev/usehooks';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { routes } from '../../config/routes';

interface Props {
  photo: UnsplashPhoto;
}

export const PinsplashImage: React.FC<Props> = (props) => {
  const {
    photo: { urls, alt_description, user, description, id, color },
  } = props;
  const size = useWindowSize();
  const [ref, hovering] = useHover();
  const router = useRouter();

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

  const { width, height } = getOptimalSizeForMasonryImage(size);

  return (
    <>
      <Button
        variant={'ghost'}
        className="relative h-auto w-auto p-0"
        ref={ref}
        onClick={() => router.push(routes.photo(id))}
      >
        <Image
          ref={imgRef}
          src={getOptimalImageUrl(size, urls)}
          alt={alt_description || ''}
          width={width}
          height={height}
          loading={isAboveFold ? 'eager' : 'lazy'}
          priority={isAboveFold}
          className="h-auto w-full rounded-xl"
          quality={75}
          style={{
            background: color,
          }}
        />
        {hovering && (
          <>
            <div className="absolute bottom-0 left-0 z-10 h-full w-full rounded-xl bg-black opacity-20" />
            <div className="absolute right-2 bottom-2 left-2 z-20 flex items-center gap-2 text-xs lg:text-sm">
              <Image
                width={getOptimalImageUrlForProfilePic(size)}
                height={getOptimalImageUrlForProfilePic(size)}
                src={user.profile_image.medium}
                alt={user.name}
                className="flex-shrink-0 rounded-full"
              />
              <p className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-white">
                {alt_description || description}
              </p>
            </div>
          </>
        )}
      </Button>
    </>
  );
};
