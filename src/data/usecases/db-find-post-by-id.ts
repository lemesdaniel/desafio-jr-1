import { PostModel } from "@/domain/model/post";
import { FindPostByIdRepository } from "../protocols/find-post-by-id-repository";


export class DbFindPostById implements FindPostByIdRepository {
    constructor(
        private readonly findPostByIdRepository: FindPostByIdRepository
    ){}
    async findById(id: string): Promise<PostModel> {
        const post = await this.findPostByIdRepository.findById(id);
        if(post){
            return post;
        }
        return null;
    }
}