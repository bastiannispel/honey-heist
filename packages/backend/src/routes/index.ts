import * as express from 'express';
const router = express.Router();

import bear from './bear.js';

router.use('/bear', bear);

export default router;
