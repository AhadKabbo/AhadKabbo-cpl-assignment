import "./App.css";
import {
  NavigationBar,
  MainNavigationBar,
  HeroSection,
  BookNow,
  DhakaResort,
  // DhakaResortCopy,
  PopularPackage,
  Review,
  Offer,
  Test,
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
      {/* <DhakaResortCopy /> */}
      <Test />
      <PopularPackage />
      <Review />
      <Offer />
      <Footer />
    </div>
  );
};

export default App;
