/* eslint-disable @typescript-eslint/no-unsafe-call */
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

import { connectDB } from './database';
import app from './app';

dotenv.config();

mongoose.set('strictQuery', false);
void connectDB();

app.listen(process.env.PORT || 8000, () => {
  console.log('Server has started!');
});
