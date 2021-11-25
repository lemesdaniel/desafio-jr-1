import { DbListPostByDate } from "@/data/usecases/db-list-post-by-date";
import { ListPostByDate } from "@/domain/usecase/list-post-by-date";
import { PostPostgresRepository } from "@/infra/db/typeorm/post/post-postgres-repository";

export const makeDbListPostByDate = (): ListPostByDate => {
    const postPostgresRepository = new PostPostgresRepository();
    return new DbListPostByDate(postPostgresRepository);
}