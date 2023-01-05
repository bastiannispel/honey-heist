import { bearSchema, IBear } from '@honey-heist/model';
import mongoose from 'mongoose';

export const BearModel = mongoose.model<IBear>('Bear', bearSchema);
