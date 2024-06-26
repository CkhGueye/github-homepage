import "./styles/global.scss";
import Header from "./layout/header/Header";
import HeroSection from "./layout/heroSection/HeroSection";
import ProductivitySection from "./layout/productivitySection/ProductivitySection";
import CodeSpacesSection from "./layout/spacesSection/CodeSpaces";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductivitySection />
      <CodeSpacesSection />
    </>
  );
}

export default App;
