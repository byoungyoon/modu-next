'use client';

import { Map, MapMarker } from 'react-kakao-maps-sdk';
import * as styles from './basicMapTheme.css';
import { useEffect, useState } from 'react';
import { useSearchStore } from '@/app/store/search';
import BasicMapManager from '@/app/(beforeLogin)/map/view/_component/BasicMapManager';
import BasicMapDataMarker from '@/app/(beforeLogin)/map/view/_component/BasicMapDataMarker';

export default function BasicMap() {
  const { text, search } = useSearchStore();

  const [map, setMap] = useState<kakao.maps.Map>();
  const [geoCenter, setGeoCenter] = useState({
    lat: 0,
    lng: 0,
  });

  const onGeoLocation = (callback: (lat: number, lng: number) => void) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        callback(position.coords.latitude, position.coords.longitude);
      });
    } else {
      console.error('geolocation을 사용할수 없어요..');
    }
  };

  useEffect(() => {
    if (!map) return;

    if (text !== '') {
      const ps = new kakao.maps.services.Places();
      ps.keywordSearch(text, (data, status, _pagination) => {
        const bounds = new kakao.maps.LatLngBounds();
        if (status === kakao.maps.services.Status.OK) {
          for (let i = 0; i < data.length; i++) {
            bounds.extend(new kakao.maps.LatLng(+data[i].y, +data[i].x));
          }

          map.setBounds(bounds);
        }
      });
    } else {
      onGeoLocation((lat, lng) => {
        map.setCenter(new kakao.maps.LatLng(lat, lng));
        map.setLevel(4);
        setGeoCenter({ lat, lng });
      });
    }
  }, [map, text, search]);

  return (
    <Map
      className={styles.container}
      center={{
        lat: 37.584971806620764,
        lng: 126.96612516254373,
      }}
      level={8}
      onCreate={setMap}
      isPanto
    >
      <BasicMapManager />
      <BasicMapDataMarker />
      <MapMarker
        position={{
          lat: geoCenter.lat,
          lng: geoCenter.lng,
        }}
        image={{
          src: '/svg/geoLocation.svg',
          size: {
            width: 30,
            height: 30,
          },
        }}
      />
    </Map>
  );
}
