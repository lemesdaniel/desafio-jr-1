import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("posts")
export class Post {
    @PrimaryColumn()
    id: string; 

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    body: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }
    }
}