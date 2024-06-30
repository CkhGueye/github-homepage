import "./prefooter.scss";
import Link from "../../components/link/Link";

export default function PrefooterSection() {
  return (
    <section className="prefooter">
      <div className="container">
        <h2>The place for anyone from anywhere to build anything</h2>
        <p>
          Whether you’re scaling your startup or just learning how to code,
          GitHub is your home. Join the world’s largest developer platform to
          build the innovations that empower humanity. Let’s build from here.
        </p>
        <div className="prefooter-buttons">
          <Link to="/" type="btn">
            Sign up for GitHub
          </Link>
          <Link to="/" type="btn-outline">
            Start a free enterprise trial
          </Link>
        </div>
      </div>
      <div style={{ height: "16rem" }} />
    </section>
  );
}
