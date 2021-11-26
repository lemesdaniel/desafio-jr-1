import { DbFindPostById } from "@/data/usecases/db-find-post-by-id";
import { FindPostById } from "@/domain/usecase/find-post-by-id";
import { PostPostgresRepository } from "@/infra/db/typeorm/post/post-postgres-repository";

export const makeDbFindPostById = (): FindPostById => {
    const postPostgresRepository = new PostPostgresRepository();
    return new DbFindPostById(postPostgresRepository);
}