import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
  next(new Error('not implemented'));
});

router
  .route('/:id')
  .post((req, res, next) => {
    next(new Error('not implemented'));
  })
  .put((req, res, next) => {
    next(new Error('not implemented'));
  })
  .delete((req, res, next) => {
    next(new Error('not implemented'));
  });

export default router;
