import { PostModel } from "../../domain/model/post";
import { AddPostParams } from "../../domain/usecase/add-post";

export interface AddPostRepository {
    add(data: AddPostParams): Promise<PostModel>
}