import { UpdatePostController } from "@/presentation/controllers/post/update-post-controller";
import { Controller } from "@/presentation/protocols/controller";
import { makeDbUpdatePost } from "../../usecases/db-update-post-factory";

export const makeUpdatePostController = (): Controller => {
    const controller = new UpdatePostController(makeDbUpdatePost());
    return controller;
}