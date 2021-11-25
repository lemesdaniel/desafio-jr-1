import { PostModel } from "@/domain/model/post";
import { mockPostModel, mockUpdatedPostModel } from "@/domain/test/mock-post";
import { AddPostParams } from "@/domain/usecase/add-post";
import { ListPostByDate, ListPostByDateParams } from "@/domain/usecase/list-post-by-date";
import { UpdatePostParams } from "@/domain/usecase/update-post";
import { AddPostRepository } from "../protocols/add-post-repository";
import { DeletePostRepository } from "../protocols/delete-post-repository";
import { ListPostByDateRepository } from "../protocols/list-post-by-date-repository";
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

export const mockListPostByDateRepository = (): ListPostByDateRepository => {
    class ListPostByDateRepositoryStub implements ListPostByDateRepository {
        async list(data: ListPostByDateParams): Promise<PostModel[]>{
            return Promise.resolve([mockPostModel(), mockPostModel()])
        }
    }
    return new ListPostByDateRepositoryStub;
}

export const mockDeletePostRepository = (): DeletePostRepository => {
    class DeletePostRepositoryStub implements DeletePostRepository {
        async delete(id: string): Promise<void> {
            return Promise.resolve();
        }
    }
    return new DeletePostRepositoryStub;
}