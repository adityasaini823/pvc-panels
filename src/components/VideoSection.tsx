import React from 'react';
import ReactPlayer from 'react-player';
import { useInView } from 'react-intersection-observer';

export const VideoSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section id="video" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">See Our Work in Action</h2>
        <div ref={ref} className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
          <ReactPlayer
            url="https://res.cloudinary.com/dxzagjkmp/video/upload/v1734959775/pvc_wall_panels_bedroom_designs_vvmftf.mp4"
            playing={inView}
            muted={true}
            loop={true}
            width="100%"
            height="100%"
            className="absolute top-0 left-0"
          />
        </div>
      </div>
    </section>
  );
};