import type { UnsplashPhoto } from '@repo/api-unsplash';
import { useWindowSize } from '@uidotdev/usehooks';
import Image from 'next/image';

const breakpoints = {
  sm: 640, // Tailwind's `sm`
  md: 768, // Tailwind's `md`
  lg: 1024, // Tailwind's `lg`
  xl: 1280, // Tailwind's `xl`
};

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

    if (size.width <= breakpoints.sm) {
      return urls.thumb;
    }
    if (size.width <= breakpoints.md) {
      return urls.small;
    }
    if (size.width <= breakpoints.lg) {
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
