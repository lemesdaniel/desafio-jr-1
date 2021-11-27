import { mockUpdatePostParams } from "@/domain/test/mock-post";
import { UpdatePostRepository } from "../protocols/update-post-repository";
import { mockUpdatePostRepository } from "../test/db-post";
import { DbUpdatePost } from "./db-update-post";

type SutTypes = {
    sut: DbUpdatePost,
    updatePostRepositoryStub: UpdatePostRepository
}

const makeSut = (): SutTypes => {
    const updatePostRepositoryStub = mockUpdatePostRepository();
    const sut = new DbUpdatePost(updatePostRepositoryStub);
    return {
        sut,
        updatePostRepositoryStub
    }
}
describe("Db Update Post", () => {
    test("Should call UpdatePostRepository with the correct value", async () => {
        const { sut, updatePostRepositoryStub } = makeSut();
        const updateSpy = jest.spyOn(updatePostRepositoryStub, "update");
        await sut.update(mockUpdatePostParams());
        expect(updateSpy).toHaveBeenCalledWith(mockUpdatePostParams());
    });
    test("Should return the updated Post on UpdatePostRepository success", async () => {
        const { sut } = makeSut();
        const post = await sut.update(mockUpdatePostParams());
        expect(post).toHaveProperty("id");
    });
    test("Should return null on UpdatePostRepository fail", async () => {
        const { sut, updatePostRepositoryStub} = makeSut();
        jest.spyOn(updatePostRepositoryStub, "update").mockReturnValueOnce(Promise.resolve(null));
        const post = await sut.update(mockUpdatePostParams());
        expect(post).toBeNull();
    });
    test("Should throw if UpdatePostRepository throws", async () => {
        const { sut, updatePostRepositoryStub} = makeSut();
        jest.spyOn(updatePostRepositoryStub, "update").mockReturnValueOnce(Promise.reject(new Error));
        const post = sut.update(mockUpdatePostParams());
        await expect(post).rejects.toThrow();    
    });
});