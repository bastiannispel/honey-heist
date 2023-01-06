import express from 'express';
import { createBear, getBear, putBear, deleteBear } from '../controllers';

const bearRouter = express.Router();

bearRouter.post('/', createBear);
bearRouter.route('/:id').get(getBear).put(putBear).delete(deleteBear);

export default bearRouter;
