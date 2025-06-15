import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/theme-context';

const images = Array.from({ length: 9 }, (_, i) => `/assets/design${i + 1}.webp`);

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isDark } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia de imagen cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`relative w-full h-64 overflow-hidden rounded-xl ${isDark ? 'bg-slate-800/50' : 'bg-gray-200'}`}>
      <img
        src={images[currentIndex]}
        alt={`Design ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-500"
      />
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-400'}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;