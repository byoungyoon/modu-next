'use client';

import { DrawingManager } from 'react-kakao-maps-sdk';
import { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAddStore } from '@/app/store/add';

export default function BasicMapManager() {
  const pathname = usePathname();
  const { setActive, setData, isClick } = useAddStore();
  const router = useRouter();

  const managerRef = useRef<kakao.maps.drawing.DrawingManager<kakao.maps.drawing.OverlayType>>(null);

  useEffect(() => {
    const manager = managerRef.current;

    if (manager) {
      manager.cancel();
      while (manager.undoable()) {
        manager.undo();
      }

      if (pathname === '/map/mode') {
        manager.select(kakao.maps.drawing.OverlayType.MARKER);
      }
    }
  }, [pathname]);

  useEffect(() => {
    const manager = managerRef.current;

    if (manager) {
      manager.addListener('drawend', () => {
        setActive();
      });
    }
  }, [managerRef.current]);

  useEffect(() => {
    if (isClick && managerRef.current) {
      const marker = managerRef.current?.getData().marker[0];
      setData(marker.y, marker.x);
      router.replace('/map/add');
    }
  }, [isClick]);

  return (
    <DrawingManager
      ref={managerRef}
      onDrawnext={() => managerRef.current?.undo()}
      drawingMode={['arrow', 'circle', 'ellipse', 'marker', 'polyline', 'rectangle', 'polygon']}
      markerOptions={{ draggable: true, removable: false }}
      polylineOptions={{
        draggable: true,
        removable: true,
        editable: true,
      }}
      rectangleOptions={{
        draggable: true,
        removable: true,
        editable: true,
      }}
      circleOptions={{
        draggable: true,
        removable: true,
        editable: true,
      }}
      polygonOptions={{
        draggable: true,
        removable: true,
        editable: true,
      }}
      ellipseOptions={{
        draggable: true,
        removable: true,
        editable: true,
      }}
      arrowOptions={{
        draggable: true,
        removable: true,
        editable: true,
      }}
    />
  );
}
