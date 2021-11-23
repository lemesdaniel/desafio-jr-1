import { HttpRequest, HttpResponse } from "./http";

export interface Controller {
    handle(request: HttpRequest): Promise<HttpResponse>
}