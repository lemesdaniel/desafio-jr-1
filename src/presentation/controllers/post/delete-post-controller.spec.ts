import { mockDeletePost } from "@/domain/test/mock-post";
import { DeletePost } from "@/domain/usecase/delete-post";
import { HttpRequest } from "@/presentation/protocols/http";
import { DeletePostController } from "./delete-post-controller";


const makeFakeRequest = (): HttpRequest => ({
    body: {
        id: "9c69d887-ad35-4059-ae1f-75d77e69bb4e"
    }
})

type SutTypes = {
    sut: DeletePostController,
    deletePostStub: DeletePost
}

const makeSut = ():SutTypes => {
    const deletePostStub = mockDeletePost();
    const sut = new DeletePostController(deletePostStub);
    return {
        sut,
        deletePostStub
    }
}
describe("Delete Post Controller", () => {
    test("Should call DeletePost with the correct values", async () => {
        const { sut, deletePostStub } = makeSut();
        const deleteSpy = jest.spyOn(deletePostStub, "delete");
        await sut.handle(makeFakeRequest());
        expect(deleteSpy).toHaveBeenCalledWith("9c69d887-ad35-4059-ae1f-75d77e69bb4e");
    });

    test("Should return 200 on when DeletePost succefully called", async () => {
        const { sut } = makeSut();
        const response = await sut.handle(makeFakeRequest());
        expect(response.status).toBe(200);
    });

    test("Should return 500 if DeletePost throws", async () => {
        const { sut, deletePostStub } = makeSut();
        jest.spyOn(deletePostStub, "delete").mockReturnValueOnce(Promise.reject(new Error()));
        const response = await sut.handle(makeFakeRequest());
        expect(response.status).toBe(500);
    });
});