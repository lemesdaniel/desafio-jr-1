import { DbDeletePost } from "@/data/usecases/db-delete-post";
import { DeletePost } from "@/domain/usecase/delete-post";
import { PostPostgresRepository } from "@/infra/db/typeorm/post/post-postgres-repository";

export const makeDbDeletePost = (): DeletePost => {
    const postPostgresRepository = new PostPostgresRepository();
    return new DbDeletePost(postPostgresRepository);
}