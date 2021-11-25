import { mockFindPostById } from "@/domain/test/mock-post";
import { FindPostById } from "@/domain/usecase/find-post-by-id";
import { HttpRequest } from "@/presentation/protocols/http";
import { FindPostByIdController } from "./find-post-by-id-controller";

const makeFakeRequest = ():HttpRequest => ({
    body: {
        //id: "12f242d3-c561-4803-a11d-fd4cca11bbf0"
        id: "any_id"
    }
})

type SutTypes = {
    sut: FindPostByIdController,
    findPostByIdStub: FindPostById
}

const makeSut = (): SutTypes => {   
    const findPostByIdStub = mockFindPostById();
    const sut = new FindPostByIdController(findPostByIdStub);
    return {
        findPostByIdStub,
        sut
    }
}

describe("Find Post By Id Controller", () => {
    test("Should call FindPostById with the correct values", async () => {
        const { sut, findPostByIdStub } = makeSut();
        const findSpy = jest.spyOn(findPostByIdStub, "find");
        await sut.handle(makeFakeRequest());
        expect(findSpy).toHaveBeenCalledWith("any_id");
    });

    test("Should return 200 on FindPostById success", async () => {
        const { sut } = makeSut();
        const response = await sut.handle(makeFakeRequest());
        expect(response.status).toBe(200);
    });

    test("Should return 204 on FindPostById fail", async () => {
        const { sut, findPostByIdStub } = makeSut();
        jest.spyOn(findPostByIdStub, "find").mockReturnValueOnce(Promise.resolve(null));
        const response = await sut.handle(makeFakeRequest());
        expect(response.status).toBe(204);
    });

    test("Should return 500 if FindPostById throws", async () => {
        const { sut, findPostByIdStub } = makeSut();
        jest.spyOn(findPostByIdStub, "find").mockReturnValueOnce(Promise.reject(new Error()));
        const response = await sut.handle(makeFakeRequest());
        expect(response.status).toBe(500);
    });
});