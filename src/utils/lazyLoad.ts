import { lazy } from 'react';

// Utility function for lazy loading components with consistent loading behavior
export const lazyLoad = (importFunc: () => Promise<any>) => {
  return lazy(async () => {
    try {
      const component = await importFunc();
      return component;
    } catch (error) {
      console.error('Error loading component:', error);
      throw error;
    }
  });
};