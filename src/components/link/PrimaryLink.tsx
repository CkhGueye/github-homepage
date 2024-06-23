import { primaryLinkProps } from "../../types";
import "./styles.scss";

export default function PrimaryLink({
  icon,
  link,
  text,
  desc,
}: primaryLinkProps) {
  return (
    <a className="dropdownMenuItem" href={link}>
      {icon && icon}
      <div>
        <span className="color-fg-default h4">{text}</span>
        {desc}
      </div>
    </a>
  );
}
