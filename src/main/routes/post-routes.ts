import { Router } from "express";
import { adaptRoute } from "../adapters/express/express-route-adapter";
import { makeAddPostController, makeListPostByDateController , makeUpdatePostController } from "../factories/controllers/post";

export default(router: Router): void => {
    router.post("/post", adaptRoute(makeAddPostController()));
    router.put("/post", adaptRoute(makeUpdatePostController()));
    router.get("/post", adaptRoute(makeListPostByDateController()))
}
