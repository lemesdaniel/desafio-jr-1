import { Post } from "@/domain/entities/post";
import { UpdatePost } from "@/domain/usecase/update-post";
import { Controller } from "@/presentation/protocols/controller";
import { HttpRequest, HttpResponse } from "@/presentation/protocols/http";
import { Repository } from "typeorm";

export class UpdatePostController implements Controller{
    
    constructor(private readonly updatePost: UpdatePost){}

    async handle(request: HttpRequest): Promise<HttpResponse> {
        try{
            const post = await this.updatePost.update(request.body);
            if(post){
                return {
                    status: 200,
                    body: post
                }
            }
            return {
                status: 204,
                body: "No data found."
            }
        }catch(error){
            return {
                status: 500,
                body: error
            }
        }
    }
}