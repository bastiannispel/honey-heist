import express from 'express';
import cors from 'cors';

import router from './routes';

const corsOptions = {
  origin: process.env.CORS_WHITELIST || 'http://localhost:3000',
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.use('/api', router);

export default app;
