import "./collaboration.scss";
import Case from "../../assets/case.svg?react";
import AnimatedLine from "../../components/animatedLine/AnimatedLine";
import Section from "../../components/section/Section";
import planSrc from "../../assets/issues-plan.webp";

export default function CollaborationSection() {
  return (
    <Section className="statement collaboration">
      <div className="container">
        <div className="withline">
          <AnimatedLine svgIcon={<Case />} />
          <div className="content">
            <h2>Collaboration</h2>
            <p>
              <span>Supercharge collaboration. </span>
              We provide unlimited repositories, best-in-class version control,
              and the world’s most powerful open source community—so your team
              can work more efficiently together.
            </p>
          </div>
        </div>
        <div className="illustration">
          <picture>
            <img src={planSrc} alt="plan" />
          </picture>
        </div>
      </div>
    </Section>
  );
}
