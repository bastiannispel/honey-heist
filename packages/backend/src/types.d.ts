import { Request } from 'express';

export interface ModelRequest<T> extends Request {
  body: T;
}
