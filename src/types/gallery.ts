export interface GalleryItem {
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
}

export interface CategoryData {
  title: string;
  type: string;
  content: GalleryItem[];
}

export interface GalleryData {
  [key: string]: CategoryData;
}