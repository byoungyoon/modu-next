export async function getVisit() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/visit`, {
    next: {
      tags: ['visit'],
    },
    credentials: 'include',
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}
