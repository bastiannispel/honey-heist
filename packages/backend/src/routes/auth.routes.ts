import express from 'express';
import { signIn, signUp } from '../controllers/auth.controller';
import {
  checkDuplicateEmail,
  checkDuplicateUsername,
  checkRolesExist,
} from '../middleware';

const authRouter = express.Router();

authRouter.post(
  '/signup',
  [checkRolesExist, checkDuplicateEmail, checkDuplicateUsername],
  signUp,
);
authRouter.post('/signin', signIn);

export default authRouter;
