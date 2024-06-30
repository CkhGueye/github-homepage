import "./didyouknow.scss";
import Section from "../../components/section/Section";
import orangeArcSrc from "../../assets/orange-arc.svg";
import AnimatedLine from "../../components/animatedLine/AnimatedLine";

export default function ReductionSection() {
  return (
    <Section className="didYouKnow reduction">
      <div className="container withline">
        <AnimatedLine>
          <img
            alt="line"
            aria-hidden="true"
            className="animatedLine-img witharc"
            src={orangeArcSrc}
            width="81"
            height="485"
          />
        </AnimatedLine>
        <div className="content">
          <span>Did you know</span>
          <h2>80% reduction</h2>
          <p>in onboarding time with GitHub</p>
        </div>
      </div>
    </Section>
  );
}
