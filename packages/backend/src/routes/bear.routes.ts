import express from 'express';
import { createBear, fetchBear } from '../controllers';
const bearRouter = express.Router();

bearRouter.post('/', () => createBear);
bearRouter
  .route('/:id')
  .get((req, res, next) => {
    void fetchBear(req, res, next);
  })
  .put((req, res, next) => {
    next(new Error('not implemented'));
  })
  .delete((req, res, next) => {
    next(new Error('not implemented'));
  });

export default bearRouter;
