import { TABS } from '@/features/products/components/product-spec-section/data';
import {} from '@remixicon/react';
import {
  ScrollArea,
  ScrollBar,
} from '@repo/design-system/components/ui/scroll-area';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@repo/design-system/components/ui/tabs';
import Image from 'next/image';
import { useState } from 'react';

export const ProductSpecSection = () => {
  const [selectedTab, setSelectedTab] = useState(TABS[0].value);

  return (
    <div className="container rounded-lg py-10">
      <h2 className="mb-6 font-semibold text-3xl text-neutral-900 md:text-5xl">
        Discover timeless elegance
      </h2>
      <p className="mb-12 text-lg text-neutral-600">
        Step into a world where quality meets quintessential charm with our
        collection. Every thread weaves a promise of unparalleled quality,
        ensuring that each garment is not just a part of your wardrobe, but a
        piece of art. Here's the essence of what makes our apparel the hallmark
        for those with an eye for excellence and a heart for the environment.
      </p>
      <Tabs value={selectedTab}>
        <ScrollArea>
          <TabsList className="h-auto w-full justify-start rounded-none border-b bg-transparent p-0">
            {TABS.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className={
                  'rounded-none py-2 text-base data-[state=active]:border-primary data-[state=active]:border-b data-[state=active]:text-primary data-[state=active]:shadow-none lg:px-4'
                }
                onClick={() => setSelectedTab(tab.value)}
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        {TABS.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <div className="flex flex-col items-center gap-8 py-2 xl:flex-row">
              <Image
                src={tab.imageSrc}
                alt={tab.imageAlt}
                width={704}
                height={384}
                className="aspect-video h-full w-full shrink-0 rounded-xl bg-neutral-50 object-cover xl:aspect-auto xl:w-[400px]"
              />
              <div className="flex-2">
                <h3 className="mb-2 font-semibold text-2xl text-neutral-900">
                  {tab.heading}
                </h3>
                <p className="mb-3 text-gray-600">{tab.description}</p>
                <div className="grid grid-cols-1 gap-4 space-y-3 py-3 md:grid-cols-2 lg:grid-cols-2">
                  {tab.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-neutral-600"
                    >
                      <div className="flex-shrink-0 rounded-full p-3 shadow-md">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
