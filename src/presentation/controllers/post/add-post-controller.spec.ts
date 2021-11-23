import { mockAddPost } from "@/domain/test/mock-post";
import { AddPost } from "@/domain/usecase/add-todo";
import { HttpRequest } from "@/presentation/protocols/http";
import { AddPostController } from "./add-post-controller";

const makeFakeRequest = (): HttpRequest => ({
    body: {
        title: "any_title",
        description: "any_description",
        body: "any_body"
    }
})

type SutTypes = {
    sut: AddPostController,
    addPostStub: AddPost
}

const makeSut = (): SutTypes => {
    const addPostStub = mockAddPost();
    const sut = new AddPostController(addPostStub);
    return {
        sut, 
        addPostStub
    }
}

describe("Post Controller", () => {
    test("Should call AddPost with the correct values", async () => {
        const { sut, addPostStub } = makeSut();
        const addSpy = jest.spyOn(addPostStub, "add");
        await sut.handle(makeFakeRequest());
        expect(addSpy).toHaveBeenCalledWith({
            title: "any_title",
            description: "any_description",
            body: "any_body"
        })
    });

    test("Should return 201 on AddPost success", async () => {
        const { sut } = makeSut();
        const response = await sut.handle(makeFakeRequest());
        expect(response.status).toBe(201);
    });

    test("Should return 500 if AddPost throws", async () => {
        const { sut, addPostStub } = makeSut();
        jest.spyOn(addPostStub, "add").mockReturnValueOnce(Promise.reject(new Error()));
        const response = await sut.handle(makeFakeRequest());
        expect(response).toEqual({
            status: 500,
            body: new Error()
        })
    });
});