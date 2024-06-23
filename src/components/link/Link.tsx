import Arrow from "../../assets/right-arrow.svg?react";
import "./link.scss";

type linkProps = {
  to: string;
  children: React.ReactNode;
  outline: string;
};

export default function Link({ to, children, outline }: linkProps) {
  const cName = outline ? "btnlink outline" : "btnlink";
  return (
    <a href={to} className={`${cName} link`}>
      {children}
      <Arrow />
    </a>
  );
}
