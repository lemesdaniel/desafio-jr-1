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
    test("Should call ListPost with the correct value", async () => {
        const { sut, listPostByDateSut } = makeSut();
        const listSpy = jest.spyOn(listPostByDateSut, "list");
        await sut.handle(makeFakeRequest());
        expect(listSpy).toHaveBeenCalledWith(mockListPostByDateParams())
    });

    test("Should return 200 on ListPost success", async () => {
        const { sut } = makeSut();
        const response =await sut.handle(makeFakeRequest());
        expect(response.status).toBe(200);
    });
});