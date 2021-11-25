import { mockListPostByDateParams, mockUpdatePostParams } from "@/domain/test/mock-post";
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
    test("Should return null if update() fail", async () => {
        const { sut } = makeSut();
        const post = await sut.add(mockAddPostParams());
        post.title = "other_title";
        const updatedPost = await sut.update(mockUpdatePostParams());
        expect(updatedPost).toBeNull;
    });

    test("Should call list() with the correct value", async () => {
        const { sut } = makeSut();
        const listSpy = jest.spyOn(sut, "list");
        await sut.list(mockListPostByDateParams());
        expect(listSpy).toHaveBeenCalledWith(mockListPostByDateParams());
    });

    test("Should return the posts on list() success", async () => {
        const { sut } = makeSut();
        await sut.add(mockAddPostParams())
        await sut.add(mockAddPostParams())
        const posts = await sut.list(mockListPostByDateParams());
        expect(posts.length).toBe(2);
    });

    test("Should return null if list() fails", async () => {
        const { sut } = makeSut();
        const posts = await sut.list(mockListPostByDateParams());
        expect(posts).toBeNull();
    });

    test("Should call delete() with the correct values", async () => {
        const { sut } = makeSut();
        const post = await sut.add(mockAddPostParams());
        const deleteSpy = jest.spyOn(sut, "delete");
        await sut.delete(post.id);
        expect(deleteSpy).toHaveBeenCalledWith(post.id);
    });

    test("Should delete a post on delete() success", async () => {
        const { sut } = makeSut();
        const post = await sut.add(mockAddPostParams());
        await sut.delete(post.id);        
        const isDeleted = await sut.list(mockListPostByDateParams());
        expect(isDeleted).toBeFalsy();
    });

    test("Should call find() with the correct values", async () => {
        const { sut } = makeSut();
        const post = await sut.add(mockAddPostParams());
        const findSpy = jest.spyOn(sut, "find");
        await sut.find(post.id);
        expect(findSpy).toHaveBeenCalledWith(post.id);
    });

    test("Should call find() with the correct values", async () => {
        const { sut } = makeSut();
        const post = await sut.add(mockAddPostParams());
        const postFound = await sut.find(post.id);
        expect(postFound).toHaveProperty("id");
    });
});