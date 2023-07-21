export type TOffer= {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  bedrooms: number;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

type City = {
  name: string;
   location: Location;
  };

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

//export type Offers = TOffer[];

