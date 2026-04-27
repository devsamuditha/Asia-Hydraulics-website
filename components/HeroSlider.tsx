import React, { useEffect, useRef, useState } from 'react';

const images = [
  '/images/air-less.png',
  '/images/Sand%20Blasting.jpg',
  '/images/RAM_4734.webp',
  '/images/RAM_4747.webp',
  '/images/RAM_4803.webp',
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const startX = useRef<number | null>(null);
  const dragging = useRef(false);

  useEffect(() => {
    if (!dragging.current) {
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 3000);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  // Mouse/touch drag handlers
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    dragging.current = true;
    startX.current = 'touches' in e ? e.touches[0].clientX : e.clientX;
  };
  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging.current || startX.current === null) return;
    let endX = null;
    if ('changedTouches' in e && e.changedTouches.length > 0) {
      endX = e.changedTouches[0].clientX;
    } else if ('touches' in e && e.touches.length > 0) {
      endX = e.touches[0].clientX;
    } else if ('clientX' in e) {
      endX = e.clientX;
    }
    if (endX !== null) {
      const diff = endX - startX.current;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          setCurrent((prev) => (prev - 1 + images.length) % images.length);
        } else {
          setCurrent((prev) => (prev + 1) % images.length);
        }
      }
    }
    dragging.current = false;
    startX.current = null;
  };

  // Single click/tap handler
  const handleClick = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };
  const handleTouch = (e: React.TouchEvent) => {
    // Only trigger on tap, not drag
    if (e.touches.length === 1 && !dragging.current) {
      setCurrent((prev) => (prev + 1) % images.length);
    }
  };

  return (
    <div
      className="relative rounded-3xl overflow-hidden shadow-[0_8px_32px_0_rgba(30,41,59,0.25)] mx-auto aspect-square w-full h-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onClick={handleClick}
      onTouchStart={handleDragStart}
      onTouchEnd={(e) => { handleDragEnd(e); handleTouch(e); }}
      style={{ cursor: 'grab' }}
    >
      <img
        src={images[current]}
        alt="Hero Slide"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        style={{ aspectRatio: '1 / 1' }}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/20 via-transparent to-transparent"></div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${current === idx ? 'bg-samu' : 'bg-slate-300'} transition-all`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
