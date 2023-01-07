import express from 'express';
import cors from 'cors';

import router from './routes';

const hostURL = process.env.HOST_URL || 'http://localhost';
const hostPort = process.env.HOST_PORT || 3000;

const corsOptions = {
  origin: `${hostURL}:${hostPort}`,
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.use('/api', router);

export default app;
