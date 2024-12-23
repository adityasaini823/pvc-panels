import React from 'react';
import ReactPlayer from 'react-player/lazy'; // Use lazy loading for ReactPlayer
import { GalleryItem as GalleryItemType } from '../../types/gallery';

interface GalleryItemProps {
  item: GalleryItemType;
  title: string;
  index: number;
}

export const GalleryItem = ({ item, title, index }: GalleryItemProps) => {
  const itemId = `${title.toLowerCase().replace(/\s+/g, '-')}-${index + 1}`;

  if (item.type === 'video') {
    return (
      <div 
        className="relative aspect-w-16 aspect-h-9"
        role="region"
        aria-label={`${title} video ${index + 1}`}
      >
        <ReactPlayer
          url={item.url}
          width="100%"
          height="100%"
          controls
          light={item.thumbnail}
          playIcon={
            <button 
              className="bg-primary/80 hover:bg-primary text-white p-4 rounded-full transition-colors"
              aria-label="Play video"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          }
          config={{
            youtube: {
              playerVars: {
                loading: 'lazy',
                rel: 0
              }
            }
          }}
        />
      </div>
    );
  }

  return (
    <div 
      className="relative aspect-w-16 aspect-h-9"
      role="img"
      aria-label={`${title} image ${index + 1}`}
    >
      <img
        src={item.url}
        alt={`${title} design example ${index + 1}`}
        className="w-full h-full object-cover"
        loading="lazy"
        id={itemId}
      />
    </div>
  );
};