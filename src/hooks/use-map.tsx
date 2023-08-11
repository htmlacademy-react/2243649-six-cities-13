import {useEffect, useState, useRef, MutableRefObject} from 'react';
import {Map} from 'leaflet';
import {City} from '../types/offers';
import layer from './constants';
import {Nullable} from 'vitest';

function useMap(
  mapRef: MutableRefObject<Nullable<HTMLElement>>,
  city: City
): Nullable<Map> {
  const [map, setMap] = useState<Nullable<Map>>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current && !
    isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom
      });

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
