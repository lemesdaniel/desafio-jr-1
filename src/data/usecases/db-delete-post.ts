import { DeletePost } from "@/domain/usecase/delete-post";
import { DeletePostRepository } from "../protocols/delete-post-repository";

export class DbDeletePost implements DeletePost {
    constructor(
        private readonly deletePostRepository: DeletePostRepository
    ){}

    async delete(id:string): Promise<void> {
        await this.deletePostRepository.delete(id);
    }
}