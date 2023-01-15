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
app.use(function (req, res, next) {
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, Content-Type, Accept',
  );
  next();
});

app.use('/api', router);

export default app;
