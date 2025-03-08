'use client';

import type { TopicRouteParams } from '@/features/shell/types/routes';
import { useGetTopicBySlugQuery } from '@repo/api-unsplash';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { SkeletonSection } from '../skeleton-section';

export const TopicHeader = () => {
  const params = useParams<TopicRouteParams>();
  const { data: topic, isLoading } = useGetTopicBySlugQuery(params.slug);

  if (isLoading || !topic) {
    return <SkeletonSection />;
  }

  return (
    <section className="container my-4">
      <Image
        src={topic.cover_photo.urls.regular}
        alt={
          topic.cover_photo.alt_description ||
          topic.cover_photo.description ||
          ''
        }
        width={topic.cover_photo.width}
        height={topic.cover_photo.height}
        className="h-60 rounded-xl object-cover md:h-96"
        style={{ background: topic.cover_photo.color }}
        priority
      />
      <div className="flex h-full w-full flex-col justify-center rounded-lg p-4">
        <h1 className="mb-2 font-semibold text-xl">{topic.title}</h1>
        <p className="w-96 max-w-full font-medium text-neutral-900 text-sm">
          {topic.description}
        </p>
      </div>
    </section>
  );
};
