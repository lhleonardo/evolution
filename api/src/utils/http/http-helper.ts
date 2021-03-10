import { ServerError } from '@/errors/server-error';
import { HttpResponse } from './http-protocols';

export const badRequest = (error: Error): HttpResponse<Error> => ({
  statusCode: 400,
  body: error,
});

export const serverError = (): HttpResponse<any> => ({
  statusCode: 500,
  body: new ServerError(),
});

export function ok<T>(data?: T): HttpResponse<T> {
  return {
    statusCode: 200,
    body: data,
  };
}
