import "./card.scss";
import { useRef } from "react";

type cardProps = {
  children: JSX.Element | JSX.Element[];
  type: "column" | "row";
};

export default function Card({ children, type }: cardProps) {
  const lightRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMvt(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (cardRef.current && lightRef.current) {
      const cardRect = cardRef.current.getBoundingClientRect();

      const offsetX = e.clientX - cardRect.left;
      const offsetY = e.clientY - cardRect.top;

      const centerX = cardRect.width / 2;
      const centerY = cardRect.height / 2;

      const rotateX = (offsetY - centerY) / 1000;
      const rotateY = (centerX - offsetX) / 1000;

      lightRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      cardRef.current.style.transform = `perspective(1000px) rotateX(${
        rotateX * 10
      }deg) rotateY(${rotateY}deg)`;
    }
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return false;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      className="card"
      onMouseMove={(e) => handleMouseMvt(e)}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div className={`card-content ${type}`}>{children}</div>
      <div className="card-light" ref={lightRef} />
    </div>
  );
}
