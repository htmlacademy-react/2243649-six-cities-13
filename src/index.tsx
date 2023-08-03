import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Setting} from './constants';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offersCount={Setting.OffersCount}
      offers={offers}
      reviews={reviews}
    />
  </React.StrictMode>
);
