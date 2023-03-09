import "./App.css";
import {
  Navbar,
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
      <div className="nav-bg">
        <Navbar />
        <HeroSection />
      </div>

      <DhakaResort />
      <PopularPackage />
      <Review />
      <Offer />

      <Footer />
    </div>
  );
};

export default App;
