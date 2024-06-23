import { useState } from "react";
import Slash from "../../assets/slash.svg?react";
import "./formSearch.scss";

export default function FormSearch() {
  const [isOnFocus, SetIsOnFocus] = useState(false);

  return (
    <form className={`search ${isOnFocus ? "onFocus" : ""}`} autoComplete="off">
      <label htmlFor="search">
        <input
          type="search"
          placeholder="Search GitHub"
          name="search"
          id="search"
          onFocus={() => SetIsOnFocus(true)}
          onBlur={() => SetIsOnFocus(false)}
        />
      </label>
      <Slash />
    </form>
  );
}
