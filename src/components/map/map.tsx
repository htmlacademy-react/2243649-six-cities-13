import {useEffect, useRef} from 'react';
import {City, Location} from '../../types/offers.tsx';
import useMap from '../../hooks/useMap.tsx';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../constants.ts';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  points: Location[];
  selectedPoint: Location | undefined;
  mapClassName: string;
}

const defaultIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});


function Map({city, points, selectedPoint, mapClassName}: MapProps): React.JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined &&
            point.latitude === selectedPoint?.latitude &&
            point.longitude === selectedPoint?.longitude
              ? currentIcon
              : defaultIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  //const style = mapClassName === 'cities' ? '100%' : '579px';

  return (
    <section className={`${mapClassName}__map map`}
      ref={mapRef}
      style={{height: '100%'}}
    >
    </section>
  );
}

export default Map;
