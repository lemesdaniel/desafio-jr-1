import { PostModel } from "@/domain/model/post";
import { mockPostModel, mockUpdatedPostModel } from "@/domain/test/mock-post";
import { AddPostParams } from "@/domain/usecase/add-post";
import { UpdatePostParams } from "@/domain/usecase/update-post";
import { AddPostRepository } from "../protocols/add-post-repository";
import { UpdatePostRepository } from "../protocols/update-post-repository";


export const mockAddPostRepository = (): AddPostRepository => {
    class AddPostRepositoryStub implements AddPostRepository {
        add(data: AddPostParams): Promise<PostModel> {
            return Promise.resolve(mockPostModel());
        }
        
    }
    return new AddPostRepositoryStub
}

export const mockUpdatePostRepository = (): UpdatePostRepository => {
    class UpdatePostRepositoryStub implements UpdatePostRepository {
        async update(data: UpdatePostParams): Promise<PostModel>{
            return Promise.resolve(mockUpdatedPostModel());
        }
    }
    return new UpdatePostRepositoryStub;
}