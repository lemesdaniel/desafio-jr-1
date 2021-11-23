import { AddPost } from "@/domain/usecase/add-todo";
import { Controller } from "@/presentation/protocols/controller";
import { HttpRequest, HttpResponse } from "@/presentation/protocols/http";

export class AddPostController implements Controller {
    constructor(
        private readonly addPost: AddPost
    ){}
    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { title, description, body} = request.body;
        const post = await this.addPost.add({title, description, body});
        if(post){
            return {
                status: 201,
                body: post
            }
        }
    }
}