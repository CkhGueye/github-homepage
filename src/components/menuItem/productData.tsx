import Action from "../../assets/action.svg?react";
import Package from "../../assets/package.svg?react";
import Security from "../../assets/security.svg?react";
import Coding from "../../assets/coding.svg?react";
import Copilot from "../../assets/copilot.svg?react";
import Code from "../../assets/code.svg?react";
import Issue from "../../assets/issue.svg?react";
import Discussion from "../../assets/discussion.svg?react";
import { primaryLinkProps, listLinkProps } from "../../types";

export const firstList: primaryLinkProps[] = [
  {
    icon: <Action />,
    text: "Actions",
    desc: "Automate any workflow",
    link: "#",
  },
  {
    icon: <Package />,
    text: "Packages",
    desc: "Host and manage packages",
    link: "#",
  },
  {
    icon: <Security />,
    text: "Security",
    desc: "Find and fix vulnerabilities",
    link: "#",
  },
  {
    icon: <Coding />,
    text: "CodeSpaces",
    desc: "Instant dev environments",
    link: "#",
  },
  {
    icon: <Copilot />,
    text: "Copilot",
    desc: "Write better code with AI",
    link: "#",
  },
  {
    icon: <Code />,
    text: "Code reviews",
    desc: "Manage code changes",
    link: "#",
  },
  {
    icon: <Issue />,
    text: "Issues",
    desc: "Plan and track work",
    link: "#",
  },
  {
    icon: <Discussion />,
    text: "Discussions",
    desc: "Collaborate outside of code",
    link: "#",
  },
];

export const secondlist: listLinkProps = {
  Explore: [
    {
      text: "All features",
      link: "#",
      withIcon: false,
    },
    {
      text: "Documentation",
      link: "#",
      withIcon: true,
    },
    {
      text: "GitHub Skills",
      link: "#",
      withIcon: true,
    },
    {
      text: "Blog",
      link: "#",
      withIcon: true,
    },
  ],
};
