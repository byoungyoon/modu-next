import { delay, http, HttpResponse } from 'msw';
import { Court } from '@/mocks/sample';

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
  http.get('/api/visit', () => {
    return HttpResponse.json({
      count: 1972,
    });
  }),
  http.get('/api/court/count', () => {
    return HttpResponse.json({
      count: 267,
    });
  }),
  http.get('/api/court', async () => {
    return HttpResponse.json(Court);
  }),
  http.post('/api/court', async () => {
    await delay(2000);

    return HttpResponse.json(
      {
        message: '/api/court success',
      },
      {
        status: 200,
      },
    );
  }),
  http.get('/api/court/:id', async ({ params }) => {
    await delay(3000);

    const { id } = params;

    const find = Court.find((court) => court.id && `${court.id}` === id)!;
    return HttpResponse.json(find);
  }),
  http.post('/api/court/update', async () => {
    await delay(2000);

    return HttpResponse.json(
      {
        message: '/api/court/update success',
      },
      {
        status: 200,
      },
    );
  }),
];
