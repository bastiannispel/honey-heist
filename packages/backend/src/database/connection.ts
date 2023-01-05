import mongoose, { Error } from 'mongoose';

export async function connectDB() {
  const username = encodeURIComponent(process.env.MONGODB_USER as string);
  const password = encodeURIComponent(process.env.MONGODB_PASSWORD as string);
  const host = process.env.MONGODB_HOST as string;
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
