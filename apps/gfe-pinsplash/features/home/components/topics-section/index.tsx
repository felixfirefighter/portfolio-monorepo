'use client';

import {
  useSelectedTopic,
  useSetSelectedTopic,
} from '@/features/shell/store/app/hooks';
import { useGetTopicsQuery } from '@repo/api-unsplash';
import { Button } from '@repo/design-system/components/ui/button';
import {
  ScrollArea,
  ScrollBar,
} from '@repo/design-system/components/ui/scroll-area';
import { Skeleton } from '@repo/design-system/components/ui/skeleton';
import { cn } from '@repo/design-system/lib/utils';
import Image from 'next/image';
export default function TopicsSection() {
  const { data: topics, isLoading } = useGetTopicsQuery();
  const selectedTopic = useSelectedTopic();
  const setSelectedTopic = useSetSelectedTopic();

  return (
    <section className="relative flex w-full flex-row items-center py-2">
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-10 bg-gradient-to-l from-transparent to-white" />

      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-max space-x-4 px-8 py-2">
          {isLoading
            ? Array.from({ length: 20 }).map((_, i) => (
                <Skeleton key={i} className="h-10 w-24 rounded-full" />
              ))
            : topics?.map((topic) => (
                <Button
                  variant={'ghost'}
                  key={topic.id}
                  className={cn(
                    'flex cursor-pointer items-center gap-0 rounded-full bg-muted p-1 text-neutral-900',
                    {
                      'bg-primary/20 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/20':
                        selectedTopic?.id === topic.id,
                    }
                  )}
                  onClick={() => {
                    setSelectedTopic(topic);
                  }}
                >
                  <Image
                    src={topic.cover_photo.urls.thumb}
                    alt={topic.description}
                    width={32}
                    height={32}
                    className="h-8 w-8 flex-shrink-0 rounded-full"
                  />
                  <p className="mx-2 flex-shrink-0 gap-0 font-medium text-sm">
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
}
