'use client';

import { MapMarker, MarkerClusterer } from 'react-kakao-maps-sdk';
import { useQuery } from '@tanstack/react-query';
import { Court } from '@/app/model/court';
import { getCourt } from '@/app/(beforeLogin)/map/_lib/getCourt';

export default function BasicMapDataMarker() {
  const { data: courts } = useQuery<Court[]>({
    queryKey: ['court'],
    queryFn: getCourt,
    staleTime: 30 * 1000,
    gcTime: 30 * 1000 * 5,
  });

  const onMarkerClick = (id: number) => () => {
    console.log(id);
  };

  return (
    <MarkerClusterer minLevel={10} averageCenter>
      {courts?.map((court) => (
        <MapMarker
          key={court.id}
          position={{
            lat: court.lat,
            lng: court.lon,
          }}
          onClick={onMarkerClick(court.id)}
          image={{
            src: '/img/marker.png',
            size: {
              width: 30,
              height: 30,
            },
          }}
        />
      ))}
    </MarkerClusterer>
  );
}
