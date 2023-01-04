import express from 'express';
import mongoose, { mongo } from 'mongoose';
import * as dotenv from 'dotenv';

import router from './routes/index.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api', router);

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL as string, () => {
  console.log('Connected to MongoDB');
});

app.listen(3000, () => {
  console.log('Server has started!');
});
