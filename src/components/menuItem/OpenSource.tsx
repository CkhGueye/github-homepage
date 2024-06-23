import { PrimaryLink, SecondaryLink } from "../index";
import { firstList, secondlist } from "./openSourceData";

export default function OpenSource() {
  return (
    <div className="dropdown column">
      <ul className="list">
        {firstList.map((item, key) => (
          <li key={key}>
            <PrimaryLink text={item.text} desc={item.desc} link={item.link} />
          </li>
        ))}
      </ul>
      <ul className="list">
        <li>Repositories</li>
        {secondlist["Repositories"].map((item, key) => (
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
  );
}
