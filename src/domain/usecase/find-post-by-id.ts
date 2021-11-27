import { PostModel } from "../model/post";


export interface FindPostById {
    findById(id: string): Promise<PostModel>
}