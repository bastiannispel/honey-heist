import mongoose, { Error } from 'mongoose';
import initializeDB from './config';

export async function connectDB() {
  const username = encodeURIComponent(process.env.MONGODB_USER || 'ERROR');
  const password = encodeURIComponent(process.env.MONGODB_PASSWORD || 'ERROR');
  const host = process.env.MONGODB_HOST || 'ERROR';
  const options = 'retryWrites=true&w=majority';

  const mongodbURL = `mongodb+srv://${username}:${password}@${host}/?${options}`;
  return mongoose
    .connect(mongodbURL, {})
    .then(() => {
      console.log('<< Connected to MongoDB >>');
      return initializeDB()
        .then(() => console.log('<< Initialised DB >>'))
        .catch((e: Error) =>
          console.log(`<< Initialising DB failed: ${e.message} >>`),
        );
    })
    .catch((e: Error) =>
      console.log(`<< Connection to MongoDB failed: ${e.message} >>`),
    );
}
