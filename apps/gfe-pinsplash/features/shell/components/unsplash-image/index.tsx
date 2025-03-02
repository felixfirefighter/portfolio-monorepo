import type { UnsplashPhoto } from '@repo/api-unsplash';
import { useWindowSize } from '@uidotdev/usehooks';
import Image from 'next/image';
import { BREAKPOINTS } from '../../config/breakpoints';

interface Props {
  photo: UnsplashPhoto;
}

export const UnsplashImage: React.FC<Props> = (props) => {
  const {
    photo: { urls, alt_description, width, height, color },
  } = props;
  const size = useWindowSize();

  const getOptimalImageUrl = () => {
    if (size === null || size.width === null) {
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
      src={getOptimalImageUrl()}
      alt={alt_description || ''}
      width={width}
      height={height}
      loading="lazy"
      className="rounded-xl"
      style={{ background: color }}
    />
  );
};
