import { QueryFunction } from '@tanstack/query-core';
import { Court } from '@/app/model/court';

export const getCourtOne: QueryFunction<Court, [_1: string, _2: string]> = async ({ queryKey }) => {
  const [_1, id] = queryKey;

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/court/${id}`, {
    next: {
      tags: ['court', id],
    },
    credentials: 'include',
    cache: 'no-cache',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};
