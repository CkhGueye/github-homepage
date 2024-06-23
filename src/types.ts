export interface primaryLinkProps {
    icon?: JSX.Element;
    link: string;
    text: string;
    desc: string;
}

export type secondaryLinkProps = {
    link: string;
    text: string;
    withIcon?: boolean;
};

export type listLinkProps = {
    [title: string]: secondaryLinkProps[];
};
  