import { PostModel } from "../model/post";
export type UpdatePostParams = {
    id: string,
    title?: string,
    description?: string,
    body?: string,
}


export interface UpdatePost {
    update(data: UpdatePostParams): Promise<PostModel>;
}