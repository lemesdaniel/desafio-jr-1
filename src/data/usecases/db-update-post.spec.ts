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
    })
});