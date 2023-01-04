import * as express from 'express';
const router = express.Router();

import bearRouter from './bear';

router.use('/bear', bearRouter);

export default router;
