import mongoose, { Error } from 'mongoose';

export async function connectDB() {
  const username = encodeURIComponent(process.env.MONGODB_USER || 'ERROR');
  const password = encodeURIComponent(process.env.MONGODB_PASSWORD || 'ERROR');
  const host = process.env.MONGODB_HOST || 'ERROR';
  const options = 'retryWrites=true&w=majority';
  try {
    const mongodbURL = `mongodb+srv://${username}:${password}@${host}/?${options}`;
    await mongoose.connect(mongodbURL, {});
    console.log('<< Connected to MongoDB >>');
  } catch (err) {
    handleConnectionError(err);
  }
}

function handleConnectionError(err: unknown) {
  console.log('<< !! Connection to MongoDB failed !! >>');
  console.log((err as Error).message);
}
