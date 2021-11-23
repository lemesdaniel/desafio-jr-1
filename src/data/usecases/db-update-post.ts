import { PostModel } from "@/domain/model/post";
import { UpdatePost, UpdatePostParams } from "@/domain/usecase/update-post";
import { UpdatePostRepository } from "../protocols/update-post-repository";

export class DbUpdatePost implements UpdatePost {

    constructor(
        private readonly updatePostRepository: UpdatePostRepository
    ){}

    async update(data: UpdatePostParams): Promise<PostModel> {
        const post = await this.updatePostRepository.update(data);
        return post;
    }
}