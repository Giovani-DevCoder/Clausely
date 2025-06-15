'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CarouselProps {
  images: string[];
  interval?: number; // Optional interval in milliseconds, defaults to 3000
}

export const Carousel: React.FC<CarouselProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-xl mb-10">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={image}
            alt={`Carousel image ${index + 1}`}
            style={{ objectFit: 'contain', width: '100%', height: '100%' }}
            className="rounded-xl"
          />
        </div>
      ))}
    </div>
  );
};