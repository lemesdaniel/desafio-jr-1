import { mockUpdatePostParams } from "@/domain/test/mock-post";
import { AddPostParams } from "@/domain/usecase/add-post";
import { connection } from "../helper/typeorm-helper";
import { PostPostgresRepository } from "./post-postgres-repository";

const mockAddPostParams = (): AddPostParams => ({
    title: "any_title",
    description: "any_description",
    body: "any_body",
});

type SutTypes = {
    sut: PostPostgresRepository;
};

const makeSut = (): SutTypes => {
    const sut = new PostPostgresRepository();
    return {
        sut,
    };
};

describe("Post Postgres Repository", () => {
    
    beforeAll(async () => {
        let migrations = await connection.create();
        await migrations.runMigrations();
    });

    beforeEach(async () => {
        await connection.clear();
    });
    afterAll(async () => {
        await connection.close();
    });
    
    test("Should be able to add a new Post", async () => {
        const { sut } = makeSut();
        const post = await sut.add(mockAddPostParams());
        expect(post).toHaveProperty("id");
    });

    test("Should call update() with the correct value", async () => {
        const { sut } = makeSut();
        const post = await sut.add(mockAddPostParams());
        post.title = "other_title";
        const updateSpy = jest.spyOn(sut, "update");
        await sut.update(post);
        expect(updateSpy).toHaveBeenCalledWith(post);
    });
    test("Should return updated post on update() success", async () => {
        const { sut } = makeSut();
        const post = await sut.add(mockAddPostParams());
        post.title = "other_title";
        const updatedPost = await sut.update(post);
        expect(updatedPost).toHaveProperty("id");
    });
});