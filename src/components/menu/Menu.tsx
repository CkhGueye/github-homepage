import Button from "../button/Button";
import { Product, Solutions, OpenSource } from "../menuItem/index";
import "./menu.scss";

export default function Menu() {
  return (
    <nav>
      <ul className="menu-list">
        <li>
          <Button text="Product" />
          <Product />
        </li>
        <li>
          <Button text="Solutions" />
          <Solutions />
        </li>
        <li>
          <Button text="Open Source" />
          <OpenSource />
        </li>
        <li>
          <Button text="Pricing" noIcon />
        </li>
      </ul>
    </nav>
  );
}
