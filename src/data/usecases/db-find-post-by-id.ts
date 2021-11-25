import { PostModel } from "@/domain/model/post";
import { FindPostByIdRepository } from "../protocols/find-post-by-id-repository";


export class DbFindPostById implements FindPostByIdRepository {
    constructor(
        private readonly findPostByIdRepository: FindPostByIdRepository
    ){}
    async find(id: string): Promise<PostModel> {
        await this.findPostByIdRepository.find(id);
        return null;
    }
}