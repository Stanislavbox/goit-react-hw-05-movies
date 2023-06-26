import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from 'fetch_api/fetch_api';
import { ReviewsWrapper, ErrorMessage,ReviewList, ReviewItem, ReviewAuthor, ReviewContent} from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviews(movieId);
        const reviewList = data.results;
        if (!reviewList.length) {
          setError(`There are no reviews`);
        }
        setReviews(reviewList);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchReviews();
  }, [movieId]);
  return (
    <ReviewsWrapper>
      {error && <ErrorMessage>Error: {error}</ErrorMessage>}
      <ReviewList>
        {reviews.map(review => (
          <ReviewItem key={review.id}>
            <ReviewAuthor>Author: {review.author}</ReviewAuthor>
            <ReviewContent>{review.content}</ReviewContent>
          </ReviewItem>
        ))}
      </ReviewList>
    </ReviewsWrapper>
  );
};
