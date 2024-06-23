import { PrimaryLink, SecondaryLink } from "../index";
import { firstList, secondlist } from "./productData";

export default function Product() {
  return (
    <>
      <div className="dropdown">
        <ul className="extra">
          {firstList.map((item, key) => (
            <li key={key}>
              <PrimaryLink
                icon={item.icon}
                text={item.text}
                desc={item.desc}
                link={item.link}
              />
            </li>
          ))}
        </ul>
        <ul className="list">
          <li>Explore</li>
          {secondlist["Explore"].map((item, key) => (
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
