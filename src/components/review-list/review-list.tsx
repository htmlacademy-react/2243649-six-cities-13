import {Review} from '../../types/reviews';
import {ReviewItem} from '../review-item/review-item';

type ReviewCardProps = {
  reviews: Review[];
}

function ReviewList({reviews}: ReviewCardProps): JSX.Element | null{
  if (reviews.length > 0) {
    return (
      <ul className="reviews__list">
        <li className="reviews__item">
          {reviews.map((item) => (<ReviewItem reviews={item} key={item.id} />))}
        </li>
      </ul>
    );
  } else {
    return null;
  }
}

export default ReviewList;
