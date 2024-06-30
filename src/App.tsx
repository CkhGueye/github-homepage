import "./styles/global.scss";
import Header from "./layout/header/Header";
import HeroSection from "./layout/heroSection/HeroSection";
import ProductivitySection from "./layout/productivitySection/ProductivitySection";
import CodeSpacesSection from "./layout/spacesSection/CodeSpaces";
import IncreaseSection from "./layout/didYouKnowSection/IncreaseSection";
import FeaturesSection from "./layout/featuresSection/FeaturedSection";
import CollaborationSection from "./layout/collaborationSection/CollaborationSection";
import ProjectSpacesSection from "./layout/spacesSection/ProjectSpaces";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductivitySection />
      <CodeSpacesSection />
      <IncreaseSection />
      <FeaturesSection />
      <CollaborationSection />
      <ProjectSpacesSection />
    </>
  );
}

export default App;
