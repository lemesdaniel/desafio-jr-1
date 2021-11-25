import { PostModel } from "@/domain/model/post";

export interface FindPostByIdRepository {
    find(id: string): Promise<PostModel>
}