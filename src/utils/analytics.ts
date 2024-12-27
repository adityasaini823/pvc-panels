type EventType = 'page_view' | 'contact_form_submit' | 'gallery_view';

export const trackEvent = (eventName: EventType, eventData?: Record<string, any>) => {
  try {
    // Implementation for your analytics platform
    if (typeof window !== 'undefined' && 'gtag' in window) {
      // @ts-ignore
      window.gtag('event', eventName, eventData);
    }
  } catch (error) {
    console.error('Analytics Error:', error);
  }
};