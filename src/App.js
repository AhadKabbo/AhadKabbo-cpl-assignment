import "./App.css";
import {
  NavigationBar,
  MainNavigationBar,
  HeroSection,
  BookNow,
  DhakaResort,
  PopularPackage,
  ReviewsCarousel,
  Offer,
  Test,
  WebFooter,
} from "./components";

import { reviews } from "./components/main/review section/reviews";
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
      <Test />
      <PopularPackage />
      <ReviewsCarousel reviews={reviews} />
      <Offer />
      <WebFooter />
    </div>
  );
};

export default App;
