import express from 'express';
import cors from 'cors';
import { createMiddleware } from '@mswjs/http-middleware';
import { handlers } from '@/mocks/handlers';

const app = express();
const port = 9090;

app.use(cors({ origin: `${process.env.NEXT_PUBLIC_BASE_URL}`, optionsSuccessStatus: 200, credentials: true }));
app.use(express.json());
app.use(createMiddleware(...handlers));

app.listen(port, () => console.log(`Mock Server is running on port: ${port}`));
