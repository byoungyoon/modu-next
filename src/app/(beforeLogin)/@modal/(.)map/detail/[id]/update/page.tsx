import UpdateModal from '@/app/(beforeLogin)/@modal/(.)map/detail/[id]/update/_component/UpdateModal';
import { Suspense } from 'react';
import MapLoading from '@/app/(beforeLogin)/map/loading';

export default function Page() {
  return (
    <Suspense fallback={<MapLoading />}>
      <UpdateModal />
    </Suspense>
  );
}
