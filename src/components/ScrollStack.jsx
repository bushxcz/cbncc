import { useLayoutEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollStack.css';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

/**
 * A window-scroll stack used on the home page for the Hero -> Who We Are handoff.
 * Optimized for 60/120fps performance across all devices.
 */
const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  onStackComplete,
}) => {
  const scrollerRef = useRef(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef(null);
  const lenisRef = useRef(null);
  const cardsRef = useRef([]);
  const offsetsRef = useRef({ cardTops: [], endTop: 0 });
  const lastTransformsRef = useRef(new Map());
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const getElementOffset = useCallback((element) => {
    let offset = 0;
    let current = element;

    while (current) {
      offset += current.offsetTop;
      current = current.offsetParent;
    }

    return offset;
  }, []);

  const measureOffsets = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const cards = cardsRef.current;
    const endElement = scroller.querySelector('.scroll-stack-end');
    offsetsRef.current = {
      cardTops: cards.map((card) => (card ? getElementOffset(card) : 0)),
      endTop: endElement ? getElementOffset(endElement) : 0,
    };
  }, [getElementOffset]);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const scrollTop = window.scrollY;
    const containerHeight = window.innerHeight;
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
    const { cardTops, endTop: endElementTop } = offsetsRef.current;

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const cardTop = cardTops[index] || 0;
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * index;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = triggerStart;
      const pinEnd = endElementTop - containerHeight / 2;
      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + index * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? index * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        cardsRef.current.forEach((_, otherIndex) => {
          const otherStart = (cardTops[otherIndex] || 0) - stackPositionPx - itemStackDistance * otherIndex;
          if (scrollTop >= otherStart) topCardIndex = otherIndex;
        });
        blur = index < topCardIndex ? Math.max(0, (topCardIndex - index) * blurAmount) : 0;
      }

      let translateY = 0;
      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * index;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * index;
      }

      const nextTransform = {
        translateY: Math.round(translateY * 10) / 10,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 10) / 10,
        blur: Math.round(blur * 10) / 10,
      };
      const previousTransform = lastTransformsRef.current.get(index);
      const hasChanged =
        !previousTransform ||
        Math.abs(previousTransform.translateY - nextTransform.translateY) > 0.1 ||
        Math.abs(previousTransform.scale - nextTransform.scale) > 0.001 ||
        Math.abs(previousTransform.rotation - nextTransform.rotation) > 0.1 ||
        Math.abs(previousTransform.blur - nextTransform.blur) > 0.1;

      if (hasChanged) {
        card.style.transform = `translate3d(0, ${nextTransform.translateY}px, 0) scale(${nextTransform.scale}) rotate(${nextTransform.rotation}deg)`;
        if (blurAmount > 0) {
          card.style.filter = nextTransform.blur > 0 ? `blur(${nextTransform.blur}px)` : '';
        }
        lastTransformsRef.current.set(index, nextTransform);
      }

      if (index === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    baseScale,
    blurAmount,
    calculateProgress,
    itemScale,
    itemStackDistance,
    onStackComplete,
    parsePercentage,
    rotationAmount,
    scaleEndPosition,
    stackPosition,
  ]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return undefined;

    const cards = Array.from(scroller.querySelectorAll('.scroll-stack-card'));
    cardsRef.current = cards;

    cards.forEach((card, index) => {
      if (index < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
      card.style.willChange = 'transform';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
    });

    measureOffsets();

    const lenis = new Lenis({
      duration: 1.0,
      easing: (time) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
      smoothWheel: true,
      touchMultiplier: 1,
      infinite: false,
      syncTouch: false,
    });

    lenis.on('scroll', () => {
      updateCardTransforms();
      ScrollTrigger.update();
    });
    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);

    const handleResize = () => {
      measureOffsets();
      updateCardTransforms();
    };

    window.addEventListener('resize', handleResize, { passive: true });
    updateCardTransforms();

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener('resize', handleResize);
      lenisRef.current?.destroy();
      stackCompletedRef.current = false;
      cardsRef.current = [];
      lastTransformsRef.current.clear();
      isUpdatingRef.current = false;
    };
  }, [itemDistance, measureOffsets, updateCardTransforms]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" aria-hidden="true" />
      </div>
    </div>
  );
};

export default ScrollStack;
