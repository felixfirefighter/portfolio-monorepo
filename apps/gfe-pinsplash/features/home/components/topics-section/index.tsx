'use client';

import { useGetTopicsQuery } from '@repo/api-unsplash';
import {
  ScrollArea,
  ScrollBar,
} from '@repo/design-system/components/ui/scroll-area';
import { Skeleton } from '@repo/design-system/components/ui/skeleton';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
export default function TopicsSection() {
  const { data: topics, isLoading } = useGetTopicsQuery();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      if (scrollRef.current) {
        setScrollLeft(scrollRef.current.scrollLeft);
        setMaxScroll(
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        );
      }
    };

    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', updateScroll);
      updateScroll(); // Initial check
    }
    return () => el?.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-2">
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-10 bg-gradient-to-l from-transparent to-white" />

      {/* Scrollable Topics List */}
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-max space-x-4 px-8 py-2">
          {isLoading
            ? Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-10 w-24 rounded-full" />
              ))
            : topics?.map((topic) => (
                <div
                  key={topic.id}
                  className="flex cursor-pointer items-center rounded-full bg-muted p-1"
                >
                  <Image
                    src={topic.cover_photo.urls.thumb}
                    alt={topic.description}
                    width={32}
                    height={32}
                    className="h-8 w-8 flex-shrink-0 rounded-full"
                  />
                  <p className="mx-2 flex-shrink-0 font-medium text-sm">
                    {topic.title}
                  </p>
                </div>
              ))}
        </div>
        <ScrollBar orientation="horizontal" hidden />
      </ScrollArea>

      <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />
    </section>
  );
}
