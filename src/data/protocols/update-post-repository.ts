import { PostModel } from "@/domain/model/post";
import { UpdatePostParams } from "@/domain/usecase/update-post";

export interface UpdatePostRepository {
    update(data: UpdatePostParams): Promise<PostModel>;
}