import { SecondaryLink } from "../index";
import { list } from "./solutionsData";

export default function Solutions() {
  return (
    <>
      <div className="dropdown column">
        <ul className="list">
          <li>For</li>
          {list["For"].map((item, key) => (
            <li key={key}>
              <SecondaryLink
                text={item.text}
                link={item.link}
                withIcon={item.withIcon}
              />
            </li>
          ))}
        </ul>
        <ul className="list">
          <li>By Solution</li>
          {list["By Solution"].map((item, key) => (
            <li key={key}>
              <SecondaryLink
                text={item.text}
                link={item.link}
                withIcon={item.withIcon}
              />
            </li>
          ))}
        </ul>
        <ul className="list">
          <li>Case Studies</li>
          {list["Case Studies"].map((item, key) => (
            <li key={key}>
              <SecondaryLink
                text={item.text}
                link={item.link}
                withIcon={item.withIcon}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
