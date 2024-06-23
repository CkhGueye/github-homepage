import { primaryLinkProps, listLinkProps } from "../../types";


export const firstList:primaryLinkProps[] = [
  {
    text: "GitHub Sponsors",
    desc: "Fund open source developers",
    link: "#"
  },
  {
    text: "The ReadME Project",
    desc: "GitHub community articles",
    link: "#"
  }
];

export const secondlist:listLinkProps = {
  Repositories: [
    { text: "Topics", link: "#", withIcon: true },
    { text: "Trending", link: "#", withIcon: true },
    { text: "Collections", link: "#", withIcon: true }
  ]
};
