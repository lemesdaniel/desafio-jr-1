import { DeletePostController } from "@/presentation/controllers/post/delete-post-controller";
import { Controller } from "@/presentation/protocols/controller";
import { makeDbDeletePost } from "../../usecases/db-delete-post-factory";

export const makeDeletePostController = (): Controller => {
    const controller = new DeletePostController(makeDbDeletePost());
    return controller;
}