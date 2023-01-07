/* eslint-disable @typescript-eslint/no-unsafe-call */
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

import { connectDB } from './database';
import app from './app';

dotenv.config();

const hostPort = process.env.HOST_PORT || 3000;

mongoose.set('strictQuery', false);
void connectDB();

app.listen(hostPort, () => {
  console.log('Server has started!');
});
