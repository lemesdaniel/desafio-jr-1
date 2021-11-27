import { mockListPostByDate, mockListPostByDateParams } from "@/domain/test/mock-post";
import { ListPostByDate } from "@/domain/usecase/list-post-by-date";
import { HttpRequest } from "@/presentation/protocols/http";
import { ListPostByDateController } from "./list-post-by-date-controller";


const makeFakeRequest = (): HttpRequest => (    {
    body: mockListPostByDateParams()
})

type SutTypes = {
    sut: ListPostByDateController,
    listPostByDateSut: ListPostByDate
}

const makeSut = ():SutTypes => {
    const listPostByDateSut = mockListPostByDate();
    const sut = new ListPostByDateController(listPostByDateSut);
    return { 
        sut,
        listPostByDateSut
    }
}

describe("List Post by Date Controller", () => {
    test("Should call ListPostByDate with the correct value", async () => {
        const { sut, listPostByDateSut } = makeSut();
        const listSpy = jest.spyOn(listPostByDateSut, "list");
        await sut.handle(makeFakeRequest());
        expect(listSpy).toHaveBeenCalledWith(mockListPostByDateParams())
    });

    test("Should return 200 on ListPostByDate success", async () => {
        const { sut } = makeSut();
        const response = await sut.handle(makeFakeRequest());
        expect(response.status).toBe(200);
    });

    test("Should return 500 if ListPostByDate throws", async () => {
        const { sut, listPostByDateSut } = makeSut();
        jest.spyOn(listPostByDateSut, "list").mockReturnValueOnce(Promise.reject(new Error()));
        const response = await sut.handle(makeFakeRequest());
        await expect(response.status).toBe(500)
    });

    test("Should return 204 if ListPostByDate doesn't find a Post", async () => {
        const { sut, listPostByDateSut } = makeSut();
        jest.spyOn(listPostByDateSut, "list").mockReturnValueOnce(Promise.resolve([]));
        const response = await sut.handle(makeFakeRequest());
        await expect(response.status).toBe(204)
    });
});