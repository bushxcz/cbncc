import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    if (!hash) {
      if (window.__lenis) {
        window.__lenis.scrollTo(0, { immediate: true });
      }
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = '';
      });
    } else {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        if (window.__lenis) {
          window.__lenis.scrollTo(element, { offset: -60, duration: 1.0 });
        } else {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // If element is not in DOM immediately, retry after a short delay
        const timer = setTimeout(() => {
          const delayedElement = document.getElementById(id);
          if (delayedElement) {
            if (window.__lenis) {
              window.__lenis.scrollTo(delayedElement, { offset: -60, duration: 1.0 });
            } else {
              delayedElement.scrollIntoView({ behavior: "smooth" });
            }
          }
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname, hash]);

  return null;
}
