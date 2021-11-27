import { mockListPostByDateParams } from "@/domain/test/mock-post";
import { ListPostByDateRepository } from "../protocols/list-post-by-date-repository";
import { mockListPostByDateRepository } from "../test/db-post";
import { DbListPostByDate } from "./db-list-post-by-date";

type SutTypes = {
    sut: DbListPostByDate,
    listPostByDateStub: ListPostByDateRepository
}

const makeSut = (): SutTypes => {
    const listPostByDateStub = mockListPostByDateRepository();
    const sut = new DbListPostByDate(listPostByDateStub);
    return {
        sut,
        listPostByDateStub
    }
}

describe("Db List Post by Date", () => {
    test("Should call ListPostByDateRepository with the correct values", async () => {
        const { sut, listPostByDateStub } = makeSut();
        const listSpy = jest.spyOn(listPostByDateStub, "list");
        const date = mockListPostByDateParams();
        await sut.list(date);
        expect(listSpy).toHaveBeenCalledWith(date);
    })
    
    test("Should call ListPostByDateRepository with the correct values", async () => {
        const { sut } = makeSut();
        const date = mockListPostByDateParams();
        const posts = await sut.list(date);
        expect(posts.length).toBeGreaterThanOrEqual(2);
    })
    
    test("Should return null if ListPostByDateRepository don't find any post", async () => {
        const { sut, listPostByDateStub } = makeSut();
        jest.spyOn(listPostByDateStub, "list").mockReturnValueOnce(Promise.resolve(null));
        const date = mockListPostByDateParams();
        const posts = await sut.list(date);
        expect(posts).toBeNull();
    });

    test("Should throw if ListPostByDateRepository throws", async () => {
        const { sut, listPostByDateStub } = makeSut();
        jest.spyOn(listPostByDateStub, "list").mockReturnValueOnce(Promise.reject(new Error()));
        const date = mockListPostByDateParams();
        const posts = sut.list(date);
        await expect(posts).rejects.toThrow();
    })
});