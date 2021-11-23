import { PostModel } from "@/domain/model/post";
import { mockPostModel } from "@/domain/test/mock-post";
import { AddPostParams } from "@/domain/usecase/add-todo";
import { AddPostRepository } from "../protocols/add-post-repository";


export const mockAddPostRepository = (): AddPostRepository => {
    class AddPostRepositoryStub implements AddPostRepository {
        add(data: AddPostParams): Promise<PostModel> {
            return Promise.resolve(mockPostModel());
        }
        
    }
    return new AddPostRepositoryStub
}