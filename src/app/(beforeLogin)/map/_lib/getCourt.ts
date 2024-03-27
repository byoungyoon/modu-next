export async function getCourt() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/court`, {
    next: {
      tags: ['court'],
    },
    credentials: 'include',
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}
