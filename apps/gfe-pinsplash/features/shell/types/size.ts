export type ImageSize = {
  width: number;
  height: number;
};

export type ImageSizeWithLabel = {
  label: string;
} & ImageSize;
