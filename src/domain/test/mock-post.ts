import { PostModel } from "../model/post";
import { AddPost, AddPostParams } from "../usecase/add-todo";

export const mockPostModel = (): PostModel => ({
    id: "any_id",
    title: "any_title",
    description: "any_description",
    body: "any_body",
    created_at: new Date,
    updated_at: new Date,
});

export const mockAddPostParams = (): AddPostParams => ({
    title: "any_title",
    description: "any_description",
    body: "any_body",
});

export const mockAddPost = (): AddPost => {
    class AddPostStub implements AddPost{
        async add(data: AddPostParams): Promise<PostModel>{
            return Promise.resolve(mockPostModel());
        }
    }
    return new AddPostStub;
}