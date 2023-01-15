import * as express from 'express';
const router = express.Router();

import bearRouter from './bear.routes';
import authRouter from './auth.routes';
import userRouter from './user.routes';

router.use('/bear', bearRouter);
router.use('/auth', authRouter);
router.use('/test', userRouter);

export default router;
