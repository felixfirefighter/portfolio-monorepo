'use client';

import { SkeletonSection } from '@/features/photos/skeleton-section';
import { StatsSection } from '@/features/photos/stats-section';
import type { PhotoRouteParams } from '@/features/shell/types/routes';
import { useGetPhotoByIdQuery } from '@repo/api-unsplash';
import { Badge } from '@repo/design-system/components/ui/badge';
import { Button } from '@repo/design-system/components/ui/button';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export const PhotoDetailsSection = () => {
  const params = useParams<PhotoRouteParams>();
  const { data: photo, isFetching } = useGetPhotoByIdQuery(params.id);

  if (isFetching || !photo) {
    return <SkeletonSection />;
  }

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center space-x-4">
          <Image
            className="rounded-full"
            src={photo.user.profile_image.small}
            alt={photo.user.username}
            width={32}
            height={32}
          />
          <h2 className="font-semibold">{photo.user.name}</h2>
        </div>
        <Button>Download</Button>
      </div>
      <Image
        src={photo.urls.regular}
        width={photo.width}
        height={photo.height}
        alt={photo.alt_description || photo.description || ''}
        className="mx-auto rounded-xl"
      />
      <div className="py-4">
        <h1 className="font-semibold text-2xl">
          {photo.alt_description || photo.description}
        </h1>
      </div>

      <StatsSection date={photo.created_at} />

      <div className="flex flex-wrap gap-3 pt-4">
        {photo.tags.map((tag) => {
          return (
            <Badge
              className="rounded bg-neutral-100 font-medium text-sm"
              variant={'secondary'}
              key={tag.title}
            >
              {tag.title}
            </Badge>
          );
        })}
      </div>
    </div>
  );
};
