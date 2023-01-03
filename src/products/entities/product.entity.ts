import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'bigint',
    })
    id: number;

    @Column({
        name: 'name',
        type: 'text',
    })
    name: string;
}
