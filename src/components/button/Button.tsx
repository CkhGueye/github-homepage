import "./button.scss";
import DownArrow from "../../assets/down-arrow.svg?react";
import { useState } from "react";

type buttonProps = {
  text: string;
  noIcon?: boolean;
  className?: string;
};

export default function Button({ text, noIcon, className }: buttonProps) {
  const [isExpanded, setIsExpended] = useState(false);
  return (
    <button
      className={`button ${className ? className : ""}`}
      type="button"
      onClick={() => setIsExpended(!isExpanded)}
      aria-expanded={isExpanded}
    >
      {text}
      {!noIcon && <DownArrow />}
    </button>
  );
}
