import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollStack.css';

gsap.registerPlugin(ScrollTrigger);

export const ScrollStackItem = ({ children, itemClassName = '', innerClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>
    <div className={`scroll-stack-card-inner ${innerClassName}`.trim()}>
      {children}
    </div>
  </div>
);

/**
 * High-performance window-scroll stack component powered by native CSS sticky
 * and GSAP ScrollTrigger for 120fps hardware-accelerated transitions.
 */
const ScrollStack = ({
  children,
  className = '',
  baseScale = 0.94,
  onStackComplete,
  // Accepted for backwards-compatibility:
  itemDistance = 0,
  itemScale = 0.03,
  itemStackDistance = 0,
  stackPosition = '0px',
  scaleEndPosition = '-10%',
  rotationAmount = 0,
  blurAmount = 0,
}) => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return undefined;

    const cards = Array.from(scroller.querySelectorAll('.scroll-stack-card'));
    if (cards.length < 2) return undefined;

    const ctx = gsap.context(() => {
      // For each card before the last, smoothly scrub scale & opacity as the next card covers it
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;

        const nextCard = cards[index + 1];
        const inner = card.querySelector('.scroll-stack-card-inner') || card;

        gsap.to(inner, {
          scale: baseScale,
          opacity: 0.75,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: nextCard,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
            invalidateOnRefresh: true,
            onLeave: () => {
              if (index === cards.length - 2 && onStackComplete) {
                onStackComplete();
              }
            },
          },
        });
      });

      ScrollTrigger.refresh();
    }, scrollerRef);

    return () => {
      ctx.revert();
    };
  }, [baseScale, onStackComplete]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
      </div>
    </div>
  );
};

export default ScrollStack;
