import { PostModel } from "@/domain/model/post";
import { ListPostByDateParams } from "@/domain/usecase/list-post-by-date";

export interface ListPostByDateRepository {
    list(data: ListPostByDateParams): Promise<PostModel[]>;
}