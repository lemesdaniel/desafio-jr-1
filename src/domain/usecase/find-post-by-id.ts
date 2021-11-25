import { PostModel } from "../model/post";


export interface FindPostById {
    find(id: string): Promise<PostModel>
}