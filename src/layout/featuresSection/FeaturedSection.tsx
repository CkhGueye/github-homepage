import "./features.scss";
import Link from "../../components/link/Link";
import imgSrc from "../../assets/editor.png";
import imgSrc2 from "../../assets/illu-actions.png";
import imgSrc3 from "../../assets/illu-mobile.png";
import Card from "../../components/card/Card";

export default function FeaturesSection() {
  return (
    <section className="features">
      <div className="container">
        <Card type="row">
          <div className="card-text">
            <p className="text-md">
              <span>GitHub Copilot</span> is your AI pair programmer that
              empowers you to complete tasks 55% faster by turning natural
              language prompts into coding suggestions.
            </p>
            <Link to="/">Meet GitHub Copilot</Link>
          </div>
          <div className="card-img">
            <img src={imgSrc} alt="editor" />
          </div>
        </Card>
        <Card type="column">
          <div className="card-text">
            <p className="text-md">
              <span>GitHub Actions</span> automates your build, test, and
              deployment workflow with simple and secure CI/CD.
            </p>
            <Link to="/">Meet GitHub Copilot</Link>
          </div>
          <div className="card-img">
            <img src={imgSrc2} alt="actions" />
          </div>
        </Card>
        <Card type="column">
          <div className="card-text">
            <p className="text-md">
              <span>GitHub Mobile</span> fits your projects in your pocket, so
              you never miss a beat while on the go.
            </p>
            <Link to="/">Get GitHub Mobile</Link>
          </div>
          <div className="card-img">
            <img src={imgSrc3} alt="mobile" />
          </div>
        </Card>
      </div>
      <div style={{ height: "16rem" }} />
    </section>
  );
}
