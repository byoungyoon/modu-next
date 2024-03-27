'use server';

export default async (prevState: any, formData: FormData) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/court`, {
      method: 'post',
      body: formData,
      credentials: 'include',
    });
  } catch (err) {
    console.error(err);
    return null;
  }
};
