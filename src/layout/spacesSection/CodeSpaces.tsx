import "./spaces.scss";
import imgSrc1 from "../../assets/codespaces1.png";
import imgSrc2 from "../../assets/codespaces2.png";
import AnimatedLine from "../../components/animatedLine/AnimatedLine";
import Section from "../../components/section/Section";
import Link from "../../components/link/Link";

export default function CodeSpacesSection() {
  return (
    <Section className="spaces codespaces">
      <div className="container withline">
        <AnimatedLine />
        <div className="content">
          <div className="content-text">
            <h2 className="text-md">
              <span>GitHub Codespaces</span> offers a complete dev environment
              in seconds, so you can code, build, test, and open pull requests
              from any repo anywhere.
            </h2>
            <Link to="/">Check out GitHub Codespaces</Link>
          </div>
          <div className="content-img">
            <img src={imgSrc2} className="illu-console" alt="console" />
            <img src={imgSrc1} className="illu-menu" alt="menu" />
          </div>
        </div>
      </div>
    </Section>
  );
}
