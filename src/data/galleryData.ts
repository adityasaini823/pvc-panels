import { GalleryData } from '../types/gallery';

export const galleryData: GalleryData = {
  ceiling: {
    title: 'Ceiling Designs',
    type: 'ceiling',
    content: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace'
      },
      {
        type: 'image',
        url: '/images/ceiling-image-1.jpeg'
      },
      {
        type: 'image',
        url: '/images/ceiling-image-2.webp'
      },
      {
        type: 'image',
        url: '/images/ceiling-image-3.jpg'
      },
    ]
  },
  kitchen: {
    title: 'Kitchen Designs',
    type: 'kitchen',
    content: [
      {
        type: 'image',
        url: '/images/kitchen-image-1.jpeg'
      },
      {
        type: 'image',
        url: '/images/kitchen-image-2.jpg'
      },
      {
        type: 'image',
        url: '/images/kitchen-image-3.jpg'
      },
    ]
  },
  walls: {
    title: 'Wall Panels',
    type: 'walls',
    content: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d'
      },
      {
        type: 'image',
        url: '/images/wall-image-2.webp'
      },
      {
        type: 'image',
        url: '/images/wall-image-1.webp'
      },
      {
        type: 'image',
        url: '/images/wall-image-3.jpg'
      },
      // {
      //   type: 'video',
      //   url: 'https://www.youtube.com/watch?v=example3',
      //   thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'
      // }
    ]
  },
  tiles: {
    title: 'PVC Tiles',
    type: 'tiles',
    content: [
      {
        type: 'image',
        url: '/images/tiles-image-2.jpeg'
      },
      {
        type: 'image',
        url: '/images/tiles-image-3.jpeg'
      },
      {
        type: 'image',
        url: '/images/tiles-image-4.jpeg'
      },
       {
        type: 'image',
        url: '/images/tiles-image-1.webp'
      },
    ]
  },
  'tv-units': {
    title: 'TV Units with Lighting',
    type: 'tv-units',
    content: [
      {
        type: 'image',
        url: '/images/tv-unit-design-1.jpg'
      },
      {
        type: 'image',
        url: '/images/tv-unit-design-2.jpg'
      },
      {
        type: 'image',
        url: '/images/tv-unit-image-3.jpg'
      },
      {
        type: 'video',
        url: 'https://res.cloudinary.com/dxzagjkmp/video/upload/v1734959775/pvc_wall_panels_bedroom_designs_vvmftf.mp4',
      }
    ]
  }
};

export type GalleryCategory = keyof typeof galleryData;