import { bearSchema } from '@honey-heist/model';
import mongoose from 'mongoose';

export const BearModel = mongoose.model('Bear', bearSchema);
