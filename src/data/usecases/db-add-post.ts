import { PostModel } from "../../domain/model/post";
import { AddPost, AddPostParams } from "../../domain/usecase/add-post";
import { AddPostRepository } from "../protocols/add-post-repository";

export class DbAddPost implements AddPost {

    constructor(private readonly addPostRepository: AddPostRepository){}

    async add(data: AddPostParams): Promise<PostModel>{
        const post = await this.addPostRepository.add(data);
        return post;
    }
}