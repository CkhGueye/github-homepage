import "./heroForm.scss";

export default function HeroForm() {
  return (
    <form className="hero-form">
      <label htmlFor="heroEmailInput">
        <input
          type="email"
          name="heroEmail"
          id="heroEmailInput"
          placeholder="Email address"
        />
      </label>
      <button type="submit">Sign up for GitHub</button>
    </form>
  );
}
