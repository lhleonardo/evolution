import { HttpRequest, HttpResponse } from './http-protocols';

export interface HttpController<TRequest, TResponse> {
  handle(request: HttpRequest<TRequest>): Promise<HttpResponse<TResponse>>;
}
