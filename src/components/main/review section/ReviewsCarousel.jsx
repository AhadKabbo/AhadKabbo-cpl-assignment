import { Carousel } from "react-bootstrap";
import ReviewCard from "./ReviewCard";

const ReviewsCarousel = ({ reviews }) => {
  return (
    <Carousel>
      {reviews.map((review) => (
        <Carousel.Item key={review.id}>
          <ReviewCard review={review} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ReviewsCarousel;
