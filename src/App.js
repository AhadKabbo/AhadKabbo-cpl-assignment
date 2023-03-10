import "./App.css";
import {
  NavigationBar,
  MainNavigationBar,
  HeroSection,
  BookNow,
  DhakaResort,
  PopularPackage,
  Review,
  Offer,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="navBg">
        <NavigationBar />
        <MainNavigationBar />
      </div>

      <HeroSection />
      <BookNow />
      <DhakaResort />
      <PopularPackage />
      <Review />
      <Offer />

      <Footer />
    </div>
  );
};

export default App;
