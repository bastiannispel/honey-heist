import { ObjectId, Schema } from 'mongoose';

export interface IRole {
  _id: ObjectId;
  name: string;
}

export interface IUser {
  _id: ObjectId;
  username: string;
  email: string;
  password: string;
  roles: ObjectId[];
}

export const roleSchema = new Schema<IRole>({
  name: { type: String, required: true },
});

export const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  roles: [{ type: Schema.Types.ObjectId, ref: 'Role' }],
});
