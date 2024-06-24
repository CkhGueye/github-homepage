import "./hero.scss";
import Copilot from "../../assets/copilot-wbg.svg?react";
import Arrow from "../../assets/right-arrow.svg?react";
import Code from "../../assets/codeInLine.svg?react";
import linesHero from "../../assets/lines-hero.svg";
import HeroForm from "../../components/heroForm/HeroForm";
import Drone from "../../components/drone/Drone";
import AnimatedLine from "../../components/animatedLine/AnimatedLine";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container withline">
        <AnimatedLine svgIcon={<Code />}>
          <img
            alt=""
            aria-hidden="true"
            className="animatedLine-img"
            src={linesHero}
            width="437"
            height="637"
          />
        </AnimatedLine>
        <div className="content">
          <Drone />
          <a href="/" className="hero-btn">
            <div className="hero-btn-wrapper">
              <Copilot />
              <div>
                <span>Introducing GitHub Copilot X</span>
                <span>Your AI pair programmer is leveling up</span>
              </div>
              <Arrow />
            </div>
          </a>
          <h1>Let’s build from here</h1>
          <p>
            Harnessed for productivity. Designed for collaboration. Celebrated
            for built-in security. Welcome to the platform developers love.
          </p>
          <div className="hero-action">
            <HeroForm />
            <div />
            <a href="/">
              Start a free enterprise trial
              <Arrow />
            </a>
          </div>
          <div className="hero-trustedBy">
            <p>Trusted by the world’s leading organizations↘︎</p>
            <div className="">
              <picture>
                <img
                  src="https://github.githubassets.com/images/modules/site/home-campaign/logos/stripe.svg"
                  alt="Stripe logo"
                  height="44"
                />
              </picture>
              <picture>
                <img
                  src="https://github.githubassets.com/images/modules/site/home-campaign/logos/pinterest.svg"
                  alt="Pinterest logo"
                  height="44"
                />
              </picture>
              <picture>
                <img
                  src="https://github.githubassets.com/images/modules/site/home-campaign/logos/kpmg.svg"
                  alt="KPMG logo"
                  height="44"
                />
              </picture>
              <picture>
                <img
                  src="https://github.githubassets.com/images/modules/site/home-campaign/logos/mercedes.svg"
                  alt="Mercedes-Benz logo"
                  height="44"
                />
              </picture>
              <picture>
                <img
                  src="https://github.githubassets.com/images/modules/site/home-campaign/logos/pg.svg"
                  alt="P&G logo"
                  height="32"
                />
              </picture>
              <picture>
                <img
                  src="https://github.githubassets.com/images/modules/site/home-campaign/logos/telus.svg"
                  alt="Telus logo"
                  height="32"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
