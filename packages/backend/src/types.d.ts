import { Request, Response } from 'express';

export interface ModelRequest<T> extends Request {
  body: T;
}

export interface ModelResponse<T> extends Response {
  body: T;
}
