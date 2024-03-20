import { delay, http, HttpResponse } from 'msw';

export const handlers = [
  http.post('/api/feedback', async ({ request }) => {
    await delay(2000);

    return HttpResponse.json(
      {
        message: '/api/feedback success',
      },
      {
        status: 200,
      },
    );
  }),
];
