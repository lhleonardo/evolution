import { Request, Response } from 'express';
import { HttpController } from './http-controller';
import { HttpRequest } from './http-protocols';

export function convertToExpressRoute(controller: HttpController<any, any>) {
  return async (req: Request, res: Response): Promise<Response> => {
    const httpRequest: HttpRequest<any> = {
      body: req.body,
    };
    const httpResponse = await controller.handle(httpRequest);

    return res.status(httpResponse.statusCode).json(httpResponse.body);
  };
}
