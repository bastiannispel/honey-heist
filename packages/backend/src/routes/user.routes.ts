import express from 'express';

import {
  adminBoard,
  allAccess,
  moderatorBoard,
  userBoard,
} from '../controllers/user.controller';
import { isAdmin, isModerator, verifyToken } from '../middleware';

const userRouter = express.Router();

userRouter.get('/all', allAccess);
userRouter.get('/user', [verifyToken], userBoard);
userRouter.get('/mod', [verifyToken, isModerator], moderatorBoard);
userRouter.get('/admin', [verifyToken, isAdmin], adminBoard);

export default userRouter;
