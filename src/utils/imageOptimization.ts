// Image optimization utility
export const getOptimizedImageUrl = (url: string, width?: number, quality: number = 80): string => {
  if (!url) return '';
  
  // If it's already an optimized URL, return as is
  if (url.includes('cloudinary.com')) return url;
  
  // For local images, add width and quality parameters
  const baseUrl = url.split('?')[0];
  return `${baseUrl}?w=${width || 'auto'}&q=${quality}`;
};