import { PostModel } from "../model/post";

export type AddPostParams = {
    title: string,
    description: string,
    body: string,
}

export interface AddPost {
    add(data: AddPostParams): Promise<PostModel>
}