'use client';

import { useFormState } from 'react-dom';
import { useEffect, useState } from 'react';
import { Court } from '@/app/model/court';
import { useAddStore } from '@/app/store/add';
import ActionModal from '@/app/(beforeLogin)/_component/ActionModal';
import { useRouter } from 'next/navigation';

type Props = {
  Court?: Court;
  title: string;
  onSubmit: any;
};

export default function FormStateModal({ Court, title, onSubmit }: Props) {
  const [state, formAction] = useFormState<{ success: boolean; redirect?: string } | null>(onSubmit, null);
  const { data } = useAddStore();
  const router = useRouter();

  const value: Court = Court ?? {
    address: data!.address,
    lat: data!.lat,
    lon: data!.lng,
    courtName: '',
    courtType: '알 수 없음',
    courtSize: '반코트',
    goalPost: '1',
    feeYn: '무료',
    parkYn: '불가능',
    comment: '',
  };

  useEffect(() => {
    if (state?.success) {
      router.replace(state.redirect as string);
    }
  }, [state]);

  return <ActionModal value={value} title={title} formAction={formAction} />;
}
