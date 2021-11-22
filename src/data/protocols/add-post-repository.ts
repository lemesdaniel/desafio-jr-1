import { PostModel } from "../../domain/model/post";
import { AddPostParams } from "../../domain/usecase/add-todo";

export interface AddPostRepository {
    add(data: AddPostParams): Promise<PostModel>
}