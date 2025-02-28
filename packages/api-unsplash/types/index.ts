export interface UnsplashUser {
  id: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string | null;
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  bio: string | null;
  location: string | null;
}

export interface UnsplashPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string | null;
  alt_description: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  likes: number;
  liked_by_user: boolean;
  user: UnsplashUser;
  views: number;
  downloads: number;
  topics?: Array<{
    id: string;
    title: string;
    slug: string;
  }>;
  tags?: Array<{
    type: string;
    title: string;
  }>;
}

export interface UnsplashSearchResponse {
  total: number;
  total_pages: number;
  results: UnsplashPhoto[];
}

export interface UnsplashCollection {
  id: string;
  title: string;
  description: string | null;
  published_at: string;
  last_collected_at: string;
  updated_at: string;
  cover_photo: UnsplashPhoto | null;
  user: UnsplashUser;
  total_photos: number;
  preview_photos: UnsplashPhoto[];
}

export interface UnsplashTopic {
  id: string;
  slug: string;
  title: string;
  description: string;
  published_at: string;
  updated_at: string;
  starts_at: string;
  ends_at: string | null;
  featured: boolean;
  total_photos: number;
  cover_photo: UnsplashPhoto;
  owners: UnsplashUser[];
}

export interface DownloadResponse {
  url: string;
}
