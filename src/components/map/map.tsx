import {useEffect, useRef} from 'react';
import {City, Location} from '../../types/offers.tsx';
import useMap from '../../hooks/use-map.tsx';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../constants.ts';
import {Icon, Marker} from 'leaflet';
import cn from 'classnames';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  points: Location[];
  selectedPoint: Location | undefined;
  mapClassName: string;
}

const GetIcon = (iconUrl: string) => new Icon({
  iconUrl: iconUrl,
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
            selectedPoint && selectedPoint === point
              ? GetIcon(URL_MARKER_CURRENT)
              : GetIcon(URL_MARKER_DEFAULT)
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);
  return (
    <section className={cn(`${mapClassName}__map`, 'map')}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
