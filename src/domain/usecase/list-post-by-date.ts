import { PostModel } from "../model/post";

export type ListPostByDateParams = {
    start_date: Date,
    end_date?: Date,
}

export interface ListPostByDate {
    list(data: ListPostByDateParams): Promise<PostModel[]>
}