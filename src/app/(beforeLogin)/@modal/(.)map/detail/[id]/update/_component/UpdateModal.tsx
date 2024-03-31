'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { Court } from '@/app/model/court';
import { getCourtOne } from '@/app/(beforeLogin)/_lib/getCourtOne';
import { useParams } from 'next/navigation';
import FormStateModal from '@/app/(beforeLogin)/_component/FormStateModal';
import onSubmit from '@/app/(beforeLogin)/@modal/(.)map/detail/[id]/update/_lib/updateCourt';

export default function UpdateModal() {
  const params = useParams<{ id: string; update: string }>();

  const { data: court } = useSuspenseQuery<Court, Object, Court, [_1: string, _2: string]>({
    queryKey: ['court', params.id],
    queryFn: getCourtOne,
    staleTime: 30 * 1000,
    gcTime: 30 * 1000 * 5,
  });

  return <FormStateModal Court={court} title="농구장 정보 수정하기" onSubmit={onSubmit} />;
}
