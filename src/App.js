import "./App.css";
import {
  NavigationBar,
  MainNavigationBar,
  HeroSection,
  BookNow,
  DhakaResort,
  // DhakaResortCopy,
  PopularPackage,
  ReviewsCarousel,
  Offer,
  Test,
  Footer,
  ReviewCard,
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
      {/* <DhakaResortCopy /> */}
      <Test />
      <PopularPackage />

      <ReviewsCarousel reviews={reviews} />
      {/* <ReviewCard review={reviews} /> */}
      {/* <Review /> */}

      <Offer />
      <Footer />
    </div>
  );
};

export default App;
