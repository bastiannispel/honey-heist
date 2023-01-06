import express from 'express';
import { createBear, getBear, deleteBear, updateBear } from '../controllers';

const bearRouter = express.Router();

bearRouter.post('/', createBear);
bearRouter.route('/:id').get(getBear).put(updateBear).delete(deleteBear);

export default bearRouter;
