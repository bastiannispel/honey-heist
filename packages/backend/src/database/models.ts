import mongoose from 'mongoose';
import {
  IUser,
  IRole,
  IBear,
  userSchema,
  roleSchema,
  bearSchema,
} from '@honey-heist/model';

export const UserModel = mongoose.model<IUser>('User', userSchema);
export const RoleModel = mongoose.model<IRole>('Role', roleSchema);
export const BearModel = mongoose.model<IBear>('Bear', bearSchema);
