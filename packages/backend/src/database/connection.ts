import { connect } from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

export function connectToDB() {
  console.log(process.env.MONGODB_URL);
  return connect(
    process.env.MONGODB_URL || 'mongodb://127.0.0.1/gettingstarted',
  );
}
