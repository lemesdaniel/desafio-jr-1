import { PostModel } from "@/domain/model/post";
import { ListPostByDateParams } from "@/domain/usecase/list-post-by-date";
import { ListPostByDateRepository } from "../protocols/list-post-by-date-repository";


export class DbListPostByDate implements ListPostByDateRepository {

    constructor(private readonly listPostByDateRepository: ListPostByDateRepository){}
    async list(data: ListPostByDateParams): Promise<PostModel[]>{
        const posts = await this.listPostByDateRepository.list(data);
        if(posts){
            return posts;
        }
        return null;
    }

}