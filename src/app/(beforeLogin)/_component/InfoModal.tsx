'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { Court } from '@/app/model/court';
import { getCourtOne } from '@/app/(beforeLogin)/_lib/getCourtOne';
import ActionModal from '@/app/(beforeLogin)/_component/ActionModal';
import { useParams } from 'next/navigation';

export default function InfoModal() {
  const params = useParams<{ id: string }>();

  const { data: court } = useSuspenseQuery<Court, Object, Court, [_1: string, _2: string]>({
    queryKey: ['court', params.id],
    queryFn: getCourtOne,
    staleTime: 30 * 1000,
    gcTime: 30 * 1000 * 5,
  });

  if (!court) return null;

  return <ActionModal title="농구장 정보" value={court} readonly />;
}
