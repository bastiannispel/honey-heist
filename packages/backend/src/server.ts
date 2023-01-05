import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

import router from './routes';
import { connectDB } from './database';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api', router);

mongoose.set('strictQuery', false);
void connectDB();

app.listen(3000, () => {
  console.log('Server has started!');
});
