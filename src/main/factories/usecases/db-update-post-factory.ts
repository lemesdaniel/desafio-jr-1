import { DbUpdatePost } from "@/data/usecases/db-update-post";
import { UpdatePost } from "@/domain/usecase/update-post";
import { PostPostgresRepository } from "@/infra/db/typeorm/post/post-postgres-repository";

export const makeDbUpdatePost = (): UpdatePost => {
    const postPostgresRepository = new PostPostgresRepository();
    return new DbUpdatePost(postPostgresRepository);
}