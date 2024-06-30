import { useEffect, useState, RefObject } from 'react';

export default function useVisibleOnScreen(element: RefObject<HTMLElement>): string {
  function isVisibleOnScreen(element: HTMLElement | null): boolean {
    if (!element) return false;
    const elementRect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const elementTopOffset = elementRect.top;
    return elementTopOffset < viewportHeight * (2 / 3);
  }

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(isVisibleOnScreen(element.current));
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [element]);

  return isVisible ? 'visible' : 'hidden';
}
