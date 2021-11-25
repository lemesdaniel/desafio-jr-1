import { DeletePostRepository } from "../protocols/delete-post-repository";
import { mockDeletePostRepository } from "../test/db-post";
import { DbDeletePost } from "./db-delete-post";

type SutTypes = {
    sut: DbDeletePost,
    deletePostRepositoryStub: DeletePostRepository
}

const makeSut = (): SutTypes => {
    const deletePostRepositoryStub = mockDeletePostRepository();
    const sut = new DbDeletePost(deletePostRepositoryStub);
    return { 
        sut,
        deletePostRepositoryStub
    }
}

describe("Db Delete Post", () => {
    test("Should call DeletePostRepository with the correct values", async () => {
        const { sut, deletePostRepositoryStub } = makeSut();
        const deleteSpy = jest.spyOn(deletePostRepositoryStub, "delete");
        await sut.delete("any_id");
        expect(deleteSpy).toHaveBeenCalledWith("any_id");
    });
});