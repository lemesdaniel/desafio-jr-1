import { DbAddPost } from "@/data/usecases/db-add-post";
import { AddPost } from "@/domain/usecase/add-post";
import { PostPostgresRepository } from "@/infra/db/typeorm/post/post-postgres-repository";

export const makeDbAddPost = (): AddPost => {
    const postPostgresRepository = new PostPostgresRepository();
    return new DbAddPost(postPostgresRepository);
}