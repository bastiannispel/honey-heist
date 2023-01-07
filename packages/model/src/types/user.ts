import { Schema } from 'mongoose';

export interface IRole {
  name: string;
}

export interface IUser {
  username: string;
  email: string;
  password: string;
  roles: IRole[];
}

export const roleSchema = new Schema<IRole>({
  name: { type: String, required: true },
});

export const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  roles: [{ type: Schema.Types.ObjectId, ref: 'Role' }],
});
