import {Offer} from '../../types/offers';
import OfferList from '../offer-card/offer-card';

type FavoriteCardProps = {
  offers: Offer[];
};

const FavoriteCard = ({offers}: FavoriteCardProps) => (
  <ul className="favorites__list">
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Amsterdam</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((item) => <OfferList key={item.id} offer={item}/>)}
      </div>
    </li>
  </ul>
);


export default FavoriteCard;
