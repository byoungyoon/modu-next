'use server';

export default async (prevState: { success: boolean; redirect?: string } | null, formData: FormData) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/court/update`, {
      method: 'post',
      body: formData,
      credentials: 'include',
    });

    return {
      success: true,
      redirect: '/success/update',
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
    };
  }
};
