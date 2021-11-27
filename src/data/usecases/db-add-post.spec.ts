import { mockAddPostParams } from "@/domain/test/mock-post";
import { AddPostRepository } from "../protocols/add-post-repository";
import { mockAddPostRepository } from "../test/db-post";
import { DbAddPost } from "./db-add-post";

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
    test("Should call AddPostRepository with the correct values", async() => {
        const { sut, addPostRepositoryStub } = makeSut();
        const addSpy = jest.spyOn(addPostRepositoryStub, "add");
        await sut.add(mockAddPostParams());
        expect(addSpy).toHaveBeenCalledWith(mockAddPostParams());
    });

    test("Should return the add Post on AddPostRepository success", async() => {
        const { sut } = makeSut();
        const post = await sut.add(mockAddPostParams());
        expect(post).toHaveProperty("id");
    });

    test("Should throw if AddPostRepository with throws", async() => {
        const { sut, addPostRepositoryStub } = makeSut();
        jest.spyOn(addPostRepositoryStub, "add").mockReturnValueOnce(Promise.reject(new Error()));
        const promise = sut.add(mockAddPostParams());
        await expect(promise).rejects.toThrow();
    });
});