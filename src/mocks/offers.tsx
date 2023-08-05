import {Offer} from '../types/offers';

export const offers: Offer[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.5,
    bedrooms: 3,
    previewImage: 'https://13.design.pages.academy/static/hotel/1.jpg'
  },
  {
    id: '7bf7f711-d29e-4222-83cd-s0f463b29f11',
    title: 'Wood and stone place',
    type: 'apartment',
    price: 370,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 13
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.9,
    bedrooms: 2,
    previewImage: 'https://13.design.pages.academy/static/hotel/11.jpg'
  },
  {
    id: 'ebbd7789-c58e-4836-ba49-582d2412bf24',
    title: 'Amazing and Extremely Central Flat',
    type: 'house',
    price: 169,
    city: {
      name: 'Brussels',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.5,
    bedrooms: 4,
    previewImage: 'https://13.design.pages.academy/static/hotel/4.jpg'
  },
  {
    id: '512e0e14-b818-47d1-9005-27ef351cb3d1',
    title: 'The Joshua Tree House',
    type: 'room',
    price: 129,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.9,
    bedrooms: 1,
    previewImage: 'https://13.design.pages.academy/static/hotel/9.jpg'
  },
];

