import Section from "../../components/section/Section";
import greenArcSrc from "../../assets/green-arc.svg";
import AnimatedLine from "../../components/animatedLine/AnimatedLine";
import "./didyouknow.scss";

export default function IncreaseSection() {
  return (
    <Section className="didYouKnow increase">
      <div className="container withline">
        <AnimatedLine>
          <img
            alt="line"
            aria-hidden="true"
            className="animatedLine-img witharc"
            src={greenArcSrc}
            width="81"
            height="485"
          />
        </AnimatedLine>
        <div className="content">
          <span>Did you know</span>
          <h2>22% increase</h2>
          <p>
            in developer productivity
            <br />
            after three years with GitHub
          </p>
        </div>
      </div>
    </Section>
  );
}
