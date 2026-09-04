"use client";

import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({
  items,
  initialScroll = 0,
  autoplay = false,
  autoplaySpeed = 0.5,
  carouselRef: externalRef,
  onInteractionChange,
  loop = false,
}) => {
  const internalRef = useRef(null);
  const carouselRef = externalRef || internalRef;
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef(null);

  // Duplicate items if loop is enabled, otherwise use items directly for clean start-to-end scroll
  const loopedItems = loop
    ? [
        ...items,
        ...items.map((item) =>
          React.cloneElement(item, {
            key: item.key + "-duplicate",
            index: items.indexOf(item) + items.length,
          }),
        ),
      ]
    : items;

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  // Auto-scroll logic
  useEffect(() => {
    if (!autoplay || isHovered) {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

    const scroll = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += autoplaySpeed;
        const scrollWidth = carouselRef.current.scrollWidth;

        if (carouselRef.current.scrollLeft >= scrollWidth / 2) {
          carouselRef.current.scrollLeft = 0;
        }

        checkScrollability();
        animationRef.current = requestAnimationFrame(scroll);
      }
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [autoplay, autoplaySpeed, isHovered]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -280, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 280, behavior: "smooth" });
    }
  };

  const handleCardClose = (index) => {
    if (carouselRef.current) {
      const isMobile = window && window.innerWidth < 768;
      const cardWidth = isMobile ? 240 : 320;
      const gap = isMobile ? 16 : 24;
      const scrollPosition = (cardWidth + gap) * index;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  // Drag to scroll logic
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeftState(carouselRef.current?.scrollLeft || 0);
    if (onInteractionChange) onInteractionChange(true);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (onInteractionChange) onInteractionChange(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (onInteractionChange) onInteractionChange(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeftState - walk;
    }
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div
        className="relative w-full mx-auto px-2 sm:px-4"
        onTouchStart={() => {
          setIsHovered(true);
          if (onInteractionChange) onInteractionChange(true);
        }}
        onTouchEnd={() => {
          setIsHovered(false);
          if (onInteractionChange) {
            setTimeout(() => onInteractionChange(false), 800);
          }
        }}
      >
        <div
          className={cn(
            "flex w-full overflow-x-auto overscroll-x-contain scroll-smooth py-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing",
            isDragging && "cursor-grabbing scroll-auto",
          )}
          ref={carouselRef}
          onScroll={checkScrollability}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div
            className={cn(
              "absolute right-0 z-20 h-full w-[8%] overflow-hidden bg-gradient-to-l from-[#0d1117] to-transparent pointer-events-none",
            )}
          />

          <div className="flex flex-row justify-start gap-4 px-2">
            {loopedItems.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * (index % items.length),
                  ease: "easeOut",
                }}
                key={"card-" + index}
                className="rounded-3xl shrink-0"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation Chevron buttons */}
        <div className="flex items-center justify-end mt-4 px-2 gap-2">
          <button
            className="relative z-40 flex h-9 w-9 items-center justify-center rounded-full bg-[#161b22] border border-white/10 hover:bg-white/10 text-white disabled:opacity-30 transition-colors cursor-pointer"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 text-white/80" />
          </button>
          <button
            className="relative z-40 flex h-9 w-9 items-center justify-center rounded-full bg-[#161b22] border border-white/10 hover:bg-white/10 text-white disabled:opacity-30 transition-colors cursor-pointer"
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5 text-white/80" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
  onClick,
}) => {
  return (
    <motion.button
      layoutId={layout ? `card-${card.title}-${index}` : undefined}
      onClick={onClick}
      className="relative z-10 flex aspect-[3/4] w-64 sm:w-72 flex-col items-start justify-end overflow-hidden rounded-xl bg-[#161b22] border border-white/10 hover:border-white/40 transition-all duration-300 text-left cursor-pointer shadow-xl group"
    >
      {/* Member image */}
      <img
        src={card.src}
        alt={card.title}
        loading="eager"
        className="absolute inset-0 z-10 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Label: Only Name and Role like Team Directory containers */}
      <div className="relative z-30 w-full p-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
        <h4 className="text-white font-bold text-lg sm:text-xl uppercase tracking-wide leading-tight">
          {card.title}
        </h4>
        <p className="text-white/60 text-xs font-mono uppercase tracking-widest mt-1">
          {card.category}
        </p>
      </div>
    </motion.button>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};

export default Carousel;
