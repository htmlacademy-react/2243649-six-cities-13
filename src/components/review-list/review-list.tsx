import {Review} from '../../types/reviews';
import {ReviewItem} from '../review-item/review-item';

type ReviewCardProps = {
  reviews: Review[];
}

function ReviewList({reviews}: ReviewCardProps): JSX.Element | null{
  if (reviews.length > 0) {
    return (
      <ul className="reviews__list">
        {reviews.map((item) => (<li key={item.id}> <ReviewItem reviews={item} /></li>
        ))}
      </ul>
    );
  } else {
    return null;
  }
}

export default ReviewList;
