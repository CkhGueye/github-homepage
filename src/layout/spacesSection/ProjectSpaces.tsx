import "./spaces.scss";
import imgSrc1 from "../../assets/illu-projects.png";
import AnimatedLine from "../../components/animatedLine/AnimatedLine";
import Section from "../../components/section/Section";
import Link from "../../components/link/Link";

export default function ProjectSpacesSection() {
  return (
    <Section className="spaces projectspaces">
      <div className="container withline">
        <AnimatedLine />
        <div className="content">
          <div className="content-text">
            <h2 className="text-md">
              <span>GitHub Issues and GitHub Projects</span> supply flexible
              project management tools that adapt to your team alongside your
              code.
            </h2>
            <Link to="/">Explore GitHub Issues</Link>
          </div>
          <div className="content-img">
            <img src={imgSrc1} className="illu-project" alt="project" />
          </div>
        </div>
      </div>
    </Section>
  );
}
