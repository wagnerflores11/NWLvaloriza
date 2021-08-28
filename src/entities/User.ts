import {Entity, PrimaryColumn, Column, CreateDateColumn,UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid"

@Entity()
class User {
    
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email:string;

    @Column()
    admin:boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}

export { User };