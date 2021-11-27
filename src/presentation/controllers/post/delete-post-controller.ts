import { DeletePost } from "@/domain/usecase/delete-post";
import { Controller } from "@/presentation/protocols/controller";
import { HttpRequest, HttpResponse } from "@/presentation/protocols/http";


export class DeletePostController implements Controller {
    
    constructor(
        private readonly deletePost: DeletePost
    ){}

    async handle(request: HttpRequest): Promise<HttpResponse>{
        try{
            const { id } = request.body;
            await this.deletePost.delete(id);
            return {
                status: 200,
                body: "OK"
            }
        }catch(error){
            return {
                status: 500,
                body: "Server Error"
            }
        }
    }
}