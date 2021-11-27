import { PostModel } from "@/domain/model/post";

export interface FindPostByIdRepository {
    findById(id: string): Promise<PostModel>
}