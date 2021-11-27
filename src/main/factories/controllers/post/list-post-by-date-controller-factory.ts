import { ListPostByDateController } from "@/presentation/controllers/post/list-post-by-date-controller";
import { Controller } from "@/presentation/protocols/controller";
import { makeDbListPostByDate } from "../../usecases";

export const makeListPostByDateController = (): Controller => {
    const controller = new ListPostByDateController(makeDbListPostByDate());
    return controller;
}