'use client';

import { routes } from '@/features/shell/config/routes';
import type { TopicRouteParams } from '@/features/shell/types/routes';
import { useGetTopicsQuery } from '@repo/api-unsplash';
import { Button } from '@repo/design-system/components/ui/button';
import {
  ScrollArea,
  ScrollBar,
} from '@repo/design-system/components/ui/scroll-area';
import { Skeleton } from '@repo/design-system/components/ui/skeleton';
import { cn } from '@repo/design-system/lib/utils';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const TopicsListSection = () => {
  const router = useRouter();
  const params = useParams<TopicRouteParams>();
  const { data: topics, isLoading } = useGetTopicsQuery();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className={cn('fixed z-20 flex w-full flex-row items-center bg-white', {
        'border-b': isScrolled,
      })}
    >
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-10 bg-gradient-to-l from-transparent to-white" />

      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-max space-x-4 px-8 pt-2 pb-4">
          {isLoading
            ? Array.from({ length: 20 }).map((_, i) => (
                <Skeleton key={i} className="h-10 w-24 rounded-full" />
              ))
            : topics?.map((topic) => (
                <Button
                  variant={'ghost'}
                  key={topic.id}
                  className={cn(
                    'flex h-10 cursor-pointer items-center gap-0 rounded-full bg-muted p-1 text-neutral-900',
                    {
                      'bg-primary/20 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/20':
                        params.slug === topic.slug,
                    }
                  )}
                  onClick={() => {
                    if (params.slug === topic.slug) {
                      router.push(routes.home());
                      return;
                    }

                    router.push(routes.topic(topic.slug));
                  }}
                >
                  <Image
                    src={topic.cover_photo.urls.thumb}
                    alt={topic.description}
                    width={32}
                    height={32}
                    className="h-8 w-8 flex-shrink-0 rounded-full "
                    style={{
                      background: topic.cover_photo.color,
                    }}
                  />
                  <p className="mx-2 flex-shrink-0 gap-0 font-medium text-sm md:mx-3">
                    {topic.title}
                  </p>
                </Button>
              ))}
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>

      <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />
    </section>
  );
};
