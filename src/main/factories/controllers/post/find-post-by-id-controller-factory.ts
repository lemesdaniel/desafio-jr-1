import { DeletePostController } from "@/presentation/controllers/post/delete-post-controller";
import { FindPostByIdController } from "@/presentation/controllers/post/find-post-by-id-controller";
import { Controller } from "@/presentation/protocols/controller";
import { makeDbFindPostById } from "../../usecases/db-find-post-by-id";

export const makeFindPostByIdController = (): Controller => {
    const controller = new FindPostByIdController(makeDbFindPostById());
    return controller;
}