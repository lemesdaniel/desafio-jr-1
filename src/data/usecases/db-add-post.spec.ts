import { PostModel } from "../../domain/model/post";
import { AddPostParams } from "../../domain/usecase/add-todo";
import { AddPostRepository } from "../protocols/add-post-repository";
import { DbAddPost } from "./db-add-post";


const mockAddPostRepository = (): AddPostRepository => {
    class AddPostRepositoryStub implements AddPostRepository {
        add(data: AddPostParams): Promise<PostModel> {
            return Promise.resolve(mockPostModel());
        }
        
    }
    return new AddPostRepositoryStub
}

const mockPostModel = (): PostModel => ({
    id: "any_id",
    title: "any_title",
    description: "any_description",
    body: "any_body",
    created_at: new Date,
    updated_at: new Date,
});

const mockAddPostParams = (): AddPostParams => ({
    title: "any_title",
    description: "any_description",
    body: "any_body",
});

type SutTypes = {
    sut: DbAddPost,
    addPostRepositoryStub: AddPostRepository
}

const makeSut = (): SutTypes => {
    const addPostRepositoryStub = mockAddPostRepository();
    const sut = new DbAddPost(addPostRepositoryStub);
    return {
        addPostRepositoryStub,
        sut
    }
}

describe("Db Add Post", () => {
    test("Should AddPostRepository with the correct values", async() => {
        const { sut, addPostRepositoryStub } = makeSut();
        const addSpy = jest.spyOn(addPostRepositoryStub, "add");
        await sut.add(mockAddPostParams());
        expect(addSpy).toHaveBeenCalledWith(mockAddPostParams());
    });
});