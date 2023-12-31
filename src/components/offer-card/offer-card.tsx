import {Offer} from '../../types/offers';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants';

type OfferCardProps = {
  offer: Offer;
  onMouseOver?: () => void;
  onMouseLeave?: () => void;
}

const bookmarkClass = 'place-card__bookmark-button';

function OfferCard({offer, onMouseOver, onMouseLeave}: OfferCardProps): JSX.Element {
  const {id, title, type, price, isFavorite, isPremium, rating, previewImage} = offer;

  return (
    <Link to={`${AppRoute.Offer}/${id}`}>
      <article className="cities__card place-card" id={id} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
        {isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={title} />
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}&nbsp;</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className={`button ${bookmarkClass} ${isFavorite ?
              bookmarkClass.concat('--active') : ''} button`} type="button"
            >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{
                width: `${(rating * 100) / 5}%`
              }}
              >
              </span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{title}</a>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    </Link>
  );
}

export default OfferCard;
