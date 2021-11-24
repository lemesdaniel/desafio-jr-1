import { mockUpdatePost } from "@/domain/test/mock-post";
import { UpdatePost } from "@/domain/usecase/update-post";
import { UpdatePostController } from "./update-post-controller";

const makeFakeRequest = () => ({
    body: {
        id: "b33583fb-afff-4d62-95fc-1a5dbc2faf3c",
        title: "any_title",
        description: "any_description",
        body: "any_body"
    }
})

type SutTypes = {
    sut: UpdatePostController,
    updatePostStub: UpdatePost
}

const makeSut = (): SutTypes => {
    const updatePostStub = mockUpdatePost();
    const sut = new UpdatePostController(updatePostStub);
    return {
        sut,
        updatePostStub
    }
}

describe("Update Post Controller", () => {
    test("Should call UpdatePost with the correct values", async () => {
        const { sut, updatePostStub } = makeSut();
        const updateSpy = jest.spyOn(updatePostStub, "update");
        await sut.handle(makeFakeRequest());
        expect(updateSpy).toHaveBeenCalledWith({
            id: "b33583fb-afff-4d62-95fc-1a5dbc2faf3c",
            title: "any_title",
            description: "any_description",
            body: "any_body"
        });
    });  

    test("Should return 200 on UpdatePost success", async () => {
        const { sut } = makeSut();
        const post = await sut.handle(makeFakeRequest());
        expect(post.status).toBe(200);
    });  

    test("Should return 204 on UpdatePost fail", async () => {
        const { sut, updatePostStub } = makeSut();
        jest.spyOn(updatePostStub, "update").mockReturnValueOnce(Promise.resolve(null));
        const post = await sut.handle(makeFakeRequest());
        expect(post.status).toBe(204);
    });  
});