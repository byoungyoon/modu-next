import { Suspense } from 'react';
import InfoModal from '@/app/(beforeLogin)/_component/InfoModal';
import MapLoading from '@/app/(beforeLogin)/map/loading';

export default function Page() {
  return (
    <Suspense fallback={<MapLoading />}>
      <InfoModal />
    </Suspense>
  );
}
