import { Post } from "@/domain/entities/post";
import { PostModel } from "@/domain/model/post";
import { AddPost, AddPostParams } from "@/domain/usecase/add-todo";
import { getRepository, Repository } from "typeorm";

export class PostPostgresRepository implements AddPost {  
    
    private repository: Repository<Post>
    
    constructor(
    ){
        this.repository = getRepository(Post);
    }

    async add(data: AddPostParams): Promise<PostModel>{
        const post = this.repository.create(data);
        await this.repository.save(post);
        return post;
    }

}   