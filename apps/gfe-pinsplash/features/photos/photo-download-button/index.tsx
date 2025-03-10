'use client';
import { getResizedDimensions } from '@/features/shell/utils/image';
import {
  type UnsplashPhoto,
  useTrackDownloadMutation,
} from '@repo/api-unsplash';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@repo/design-system/components/ui/dropdown-menu';

import { RiArrowDownSLine } from '@remixicon/react';
import { Button } from '@repo/design-system/components/ui/button';

type Props = {
  photo: UnsplashPhoto;
};

export const PhotoDownloadButton: React.FC<Props> = (props) => {
  const { photo } = props;
  const [trackDownload] = useTrackDownloadMutation();

  const handleDownload = async (size: number) => {
    const downloadUrl = `${photo.urls.full}&w=${size}`;
    const response = await fetch(downloadUrl);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `${photo.slug}.png`; // Suggested filename
    document.body.appendChild(link);
    link.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(link);

    trackDownload();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          Download <RiArrowDownSLine className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-xl" align="end">
        {getResizedDimensions(photo.width, photo.height).map((size) => {
          const item = (
            <DropdownMenuItem
              className="rounded py-2 text-sm"
              key={size.label}
              onClick={() => handleDownload(size.width)}
            >
              <span className="font-medium">{size.label}</span>{' '}
              <span className="font-normal">
                ({size.width} × {size.height})
              </span>
            </DropdownMenuItem>
          );

          return item;
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
