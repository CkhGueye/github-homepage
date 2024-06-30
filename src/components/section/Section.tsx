import "./section.scss";
import { HTMLAttributes, useRef } from "react";
import useVisibleOnScreen from "../../utils/useVisibleOnScreen";

interface sectionProps extends HTMLAttributes<HTMLElement> {
  children: JSX.Element;
  className?: string;
}

export default function Section({
  children,
  className,
  ...othersProps
}: sectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const visibility = useVisibleOnScreen(sectionRef);

  return (
    <section
      className={`${className} animated-block ${visibility}`}
      {...othersProps}
      ref={sectionRef}
    >
      {children}
    </section>
  );
}
