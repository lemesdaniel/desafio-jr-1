import { AddPostController } from "@/presentation/controllers/post/add-post-controller"
import { Controller } from "@/presentation/protocols/controller";
import { makeDbAddPost } from "../../usecases/db-add-post-factory"

export const makeAddPostController = (): Controller => {
    const controller = new AddPostController(makeDbAddPost());
    return controller;
}