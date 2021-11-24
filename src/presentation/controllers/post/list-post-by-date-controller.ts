import { PostModel } from "@/domain/model/post";
import { ListPostByDate, ListPostByDateParams } from "@/domain/usecase/list-post-by-date";
import { Controller } from "@/presentation/protocols/controller";
import { HttpRequest, HttpResponse } from "@/presentation/protocols/http";


export class ListPostByDateController implements Controller {

    constructor(
        private readonly listPostByDate: ListPostByDate
    ){}
    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { start_date, end_date } = request.body;
        await this.listPostByDate.list({start_date, end_date});        
        return null;
    }
}