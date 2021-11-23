import { Post } from "@/domain/entities/post";
import { PostModel } from "@/domain/model/post";
import { AddPost, AddPostParams } from "@/domain/usecase/add-post";
import { UpdatePost, UpdatePostParams } from "@/domain/usecase/update-post";
import { getRepository, Repository } from "typeorm";

export class PostPostgresRepository implements AddPost, UpdatePost {  
    
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

    async update(data: UpdatePostParams):Promise<PostModel>{
        const post = await this.repository.findOne(data.id);
        const updatedPost = await this.repository.save({...post, ...data});
        return null;
    }

}   