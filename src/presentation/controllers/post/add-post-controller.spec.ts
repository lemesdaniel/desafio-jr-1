import { mockAddPost } from "@/domain/test/mock-post";
import { AddPost, AddPostParams } from "@/domain/usecase/add-todo";
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

describe("Add Post Controller", () => {
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
});