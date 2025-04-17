import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ 
  children, 
  autoPlay = true, 
  interval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const itemsToShow = 3;
  const totalItems = children.length;

  const next = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === totalItems - itemsToShow ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalItems - itemsToShow : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      next();
    }, interval);
    
    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval]);

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % totalItems;
      items.push({
        content: children[index],
        index,
        position: i
      });
    }
    return items;
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex justify-center items-center h-full">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <div className="flex w-full justify-between items-center">
            {getVisibleItems().map((item) => (
              <motion.div
                key={item.index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className={`w-1/3 px-2 ${
                  item.position === 1 ? 'z-10 scale-110' : 'opacity-70 scale-95'
                }`}
              >
                {item.content}
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>

      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-20 hover:bg-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-navy" size={24} />
      </button>
      
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-20 hover:bg-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="text-navy" size={24} />
      </button>
    </div>
  );
};

export default Carousel;