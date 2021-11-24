import { mockUpdatePost } from "@/domain/test/mock-post";
import { UpdatePost } from "@/domain/usecase/update-post";
import { UpdatePostController } from "./update-post-controller";

const makeFakeRequest = () => ({
    body: {
        id: "any_id",
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
            id: "any_id",
            title: "any_title",
            description: "any_description",
            body: "any_body"
        });
    });  
});