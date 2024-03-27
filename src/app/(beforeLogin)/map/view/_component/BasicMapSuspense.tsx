import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getCourt } from '@/app/(beforeLogin)/map/_lib/getCourt';
import BasicMap from '@/app/(beforeLogin)/map/view/_component/BasicMap';

export default async function BasicMapSuspense() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['court'],
    queryFn: getCourt,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <BasicMap />
    </HydrationBoundary>
  );
}
