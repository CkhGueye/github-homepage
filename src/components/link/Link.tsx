import Arrow from "../../assets/right-arrow.svg?react";
import "./link.scss";

type linkProps = {
  to: string;
  children: React.ReactNode;
  type?: "btn" | "btn-outline";
};

export default function Link({ to, children, type }: linkProps) {
  const cName = type ? type : "";
  return (
    <a href={to} className={`${cName} link`}>
      {children}
      <Arrow />
    </a>
  );
}
