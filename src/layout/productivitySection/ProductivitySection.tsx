import "./productivity.scss";
import Case from "../../assets/case.svg?react";
import AnimatedLine from "../../components/animatedLine/AnimatedLine";
import Section from "../../components/section/Section";
import consoleSrc from "../../assets/console.png";
import consoleXsSrc from "../../assets/console-xs.png";

export default function ProductivitySection() {
  return (
    <Section className="statement productivity">
      <div className="container">
        <div className="withline">
          <AnimatedLine svgIcon={<Case />} />
          <div className="content">
            <h2 className="delay-200ms">Productivity</h2>
            <p>
              <span>Accelerate high-quality software development. </span>
              Our platform drives innovation with tools that boost developer
              velocity
            </p>
          </div>
        </div>
        <div className="illustration">
          <picture>
            <source media="(max-width: 799px)" srcSet={consoleXsSrc} />
            <source media="(min-width: 800px)" srcSet={consoleSrc} />
            <img src={consoleSrc} alt="console illustration" />
          </picture>
        </div>
      </div>
    </Section>
  );
}
