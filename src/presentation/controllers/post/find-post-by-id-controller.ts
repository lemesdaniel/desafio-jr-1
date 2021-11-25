import { FindPostById } from "@/domain/usecase/find-post-by-id";
import { Controller } from "@/presentation/protocols/controller";
import { HttpRequest, HttpResponse } from "@/presentation/protocols/http";

export class FindPostByIdController implements Controller{

    constructor(
        private readonly findPostById: FindPostById
    ){}
    async handle(request: HttpRequest):Promise<HttpResponse> {
        const { id } = request.body;
        const post = await this.findPostById.find(id);
        if(post){
            return {
                status: 200,
                body: post
            }
        }
        return {
            status: 204,
            body: "No post found"
        }
    }
}