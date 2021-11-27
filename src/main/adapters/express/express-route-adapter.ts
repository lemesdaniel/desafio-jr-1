import { Controller } from "@/presentation/protocols/controller";
import { HttpRequest } from "@/presentation/protocols/http";
import { Request, Response } from "express";


export const adaptRoute = (controller: Controller) => {
    return async (request: Request, response: Response) => {
        const httpRequest: HttpRequest = {
            body: request.body,
            params: request.params,
        };
        const httpResponse = await controller.handle(httpRequest);
        response.status(httpResponse.status).json(httpResponse.body);
    }
}