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
        type: 'video',
        url: 'https://www.youtube.com/watch?v=example1',
        thumbnail: 'https://images.unsplash.com/photo-1616486701797-0f33f61038df'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1616486701944-ab0a5016c881'
      }
    ]
  },
  kitchen: {
    title: 'Kitchen Designs',
    type: 'kitchen',
    content: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1556911220-bff31c812dba'
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/watch?v=example2',
        thumbnail: 'https://images.unsplash.com/photo-1556912167-f556f1f39faa'
      }
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
        type: 'video',
        url: 'https://www.youtube.com/watch?v=example3',
        thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'
      }
    ]
  },
  tiles: {
    title: 'PVC Tiles',
    type: 'tiles',
    content: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a'
      },
      {
        type: 'video',
        url: 'https://res.cloudinary.com/dxzagjkmp/video/upload/v1734959775/pvc_wall_panels_bedroom_designs_vvmftf.mp4',
        thumbnail: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a'
      }
    ]
  },
  'tv-units': {
    title: 'TV Units with Lighting',
    type: 'tv-units',
    content: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1593784991095-a205069470b6'
      },
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
        url: 'https://www.youtube.com/watch?v=example5',
        thumbnail: 'https://images.unsplash.com/photo-1593784991095-a205069470b6'
      }
    ]
  }
};

export type GalleryCategory = keyof typeof galleryData;