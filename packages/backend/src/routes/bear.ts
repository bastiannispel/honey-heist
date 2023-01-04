import express from 'express';
import { createBear } from '../controllers';
const bearRouter = express.Router();

bearRouter.post('/', (req, res, next) => {
  void createBear(req, res, next);
});

bearRouter
  .route('/:id')
  .get((req, res, next) => {
    next(new Error('not implemented'));
  })
  .put((req, res, next) => {
    next(new Error('not implemented'));
  })
  .delete((req, res, next) => {
    next(new Error('not implemented'));
  });

export default bearRouter;
