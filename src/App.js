import "./App.css";
import {
  NavigationBar,
  MainNavigationBar,
  HeroSection,
  DhakaResort,
  PopularPackage,
  Review,
  Offer,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="App">
      <div style={{ background: "#007bff" }}>
        <NavigationBar />
        <MainNavigationBar />
      </div>

      <HeroSection />
      <DhakaResort />
      <PopularPackage />
      <Review />
      <Offer />

      <Footer />
    </div>
  );
};

export default App;
