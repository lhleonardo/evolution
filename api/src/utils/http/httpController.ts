import { HttpRequest, HttpResponse } from "./httpProtocols";

export interface HttpController<TRequest, TResponse> {
  handle(request: HttpRequest<TRequest>): Promise<HttpResponse<TResponse>>;
}