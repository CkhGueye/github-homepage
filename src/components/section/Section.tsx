import "./section.scss";
import { HTMLAttributes, useEffect, useRef, useState } from "react";

interface sectionProps extends HTMLAttributes<HTMLElement> {
  children: JSX.Element;
  className?: string;
}

export default function Section({
  children,
  className,
  ...othersProps
}: sectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  function isVisibleOnScreen(element: HTMLElement | null): boolean {
    if (!element) return false;
    const elementRect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const elementTopOffset = elementRect.top;
    return elementTopOffset < viewportHeight * (2 / 3);
  }

  useEffect(() => {
    function handleScroll() {
      if (sectionRef.current) {
        setIsVisible(isVisibleOnScreen(sectionRef.current));
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`${className} animatate-block ${
        isVisible ? "visible" : "hidden"
      }`}
      {...othersProps}
      ref={sectionRef}
    >
      {children}
    </section>
  );
}
