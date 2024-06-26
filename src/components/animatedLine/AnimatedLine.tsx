import "./animatedLine.scss";

type animatedLineProps = {
  children?: JSX.Element;
  svgIcon?: React.ReactNode;
};

export default function AnimatedLine({ children, svgIcon }: animatedLineProps) {
  return (
    <div className={`animatedLine`}>
      {children}
      {svgIcon && <div className="animatedLine-svgWrapper">{svgIcon}</div>}
      <div className="animatedLine-line" />
    </div>
  );
}
