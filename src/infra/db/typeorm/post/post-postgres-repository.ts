import { Post } from "@/domain/entities/post";
import { PostModel } from "@/domain/model/post";
import { AddPost, AddPostParams } from "@/domain/usecase/add-post";
import { ListPostByDate, ListPostByDateParams } from "@/domain/usecase/list-post-by-date";
import { UpdatePost, UpdatePostParams } from "@/domain/usecase/update-post";
import { Between, getRepository, Repository } from "typeorm";

export class PostPostgresRepository implements AddPost, UpdatePost, ListPostByDate{  
    
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
        if(!post){
            return null;
        }
        const updatedPost = await this.repository.save({...post, ...data});
        return updatedPost;
    }

    async list(data: ListPostByDateParams): Promise<PostModel[]> {
        const { start_date, end_date} = data;
        const posts = await this.repository.find({
            created_at: Between(start_date, end_date)
        });
        return null;
    }

}   