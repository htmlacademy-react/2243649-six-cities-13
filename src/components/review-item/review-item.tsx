import {Review} from '../../types/reviews';
import {RATING} from '../../constants';
import dayjs from 'dayjs';

type ReviewItemProps = {
  reviews: Review;
}

export function ReviewItem({reviews}: ReviewItemProps): JSX.Element {
  const getFormatDate = (date: string): string => (dayjs(date).format('MMMM YYYY'));
  const RatingCount = (rating: number): number => rating * RATING;
  return (
    <>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={reviews.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {reviews.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span
              style={{
                width: `${RatingCount(reviews.rating)}%`
              }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {reviews.comment}
        </p>
        <time className="reviews__time" dateTime={reviews.date}>{getFormatDate(reviews.date)}</time>
      </div>
    </>
  );
}
