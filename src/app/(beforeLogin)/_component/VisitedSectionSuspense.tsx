import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getVisit } from '@/app/(beforeLogin)/_lib/getVisit';
import { getCourtCount } from '@/app/(beforeLogin)/_lib/getCourtCount';
import VisitedSection from '@/app/(beforeLogin)/_component/VisitedSection';

export default async function VisitedSectionSuspense() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['visit'],
    queryFn: getVisit,
  });
  await queryClient.prefetchQuery({
    queryKey: ['court', 'count'],
    queryFn: getCourtCount,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <VisitedSection />
    </HydrationBoundary>
  );
}
