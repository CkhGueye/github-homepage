import Menu from "../../components/menu/Menu";
import Logo from "../../assets/logo.svg?react";
import Bar from "../../components/button/Bar";
import FormSearch from "../../components/formSearch/FormSearch";
import "./header.scss";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const dismiss = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target !== e.currentTarget) return;
    setOpen(false);
  };

  return (
    <header className={`${open ? "menu-opened" : ""}`}>
      <div className="container">
        <a href="/" className="logo">
          <Logo />
        </a>
        <div className="menu-wrapper" onClick={(e) => dismiss(e)}>
          <div className="menu-container">
            <Menu />
            <FormSearch />
            <a href="/#" className="button sign-in">
              Sign In
            </a>
          </div>
        </div>
        <a href="/#" className="button bordered">
          Sign up
        </a>
        <Bar open={open} setOpen={setOpen} />
      </div>
    </header>
  );
}

// import Logo from "../../assets/logo.svg?react";

// const MyComponent: React.FC = () => {
//   return (
//     <div>
//       {/* <SamaSvg width={50} height={50} /> */}
//       <Logo />
//       <p>This is an SVG icon used as a React component.</p>
//     </div>
//   );
// };

// export default MyComponent;
