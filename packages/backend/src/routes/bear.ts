import express from 'express';
const bearRouter = express.Router();

bearRouter.post('/', (req, res, next) => {
  next(new Error('not implemented'));
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
