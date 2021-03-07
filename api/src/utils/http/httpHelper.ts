import { ServerError } from "errors/http/server-error"
import { HttpResponse } from "./httpProtocols"

export const badRequest = (error: Error): HttpResponse<Error> => ({
  statusCode: 400,
  body: error
})

export const serverError = (): HttpResponse<any> => ({
  statusCode: 500,
  body: new ServerError()
})

export function ok<T>(data: T): HttpResponse<T> {
  return {
    statusCode: 200,
    body: data
  }
}