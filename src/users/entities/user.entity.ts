import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'bigint',
    })
    id: number;

    @Column({
        name: 'username',
        type: 'text',
        unique: true,
    })
    username: string;

    @Column({
        name: 'password',
        type: 'text',
        select: false,
    })
    password: string;

    @Column({
        name: 'first_name',
        type: 'text',
        nullable: true,
    })
    firstName: string;

    @Column({
        name: 'last_name',
        type: 'text',
        nullable: true,
    })
    lastName: string;

    @Column({
        name: 'email',
        type: 'text',
    })
    email: string;

    @Column({
        name: 'phone_number',
        type: 'text',
        nullable: true,
    })
    phoneNumber: string;

    @Column({
        name: 'avatar',
        type: 'text',
        nullable: true,
    })
    avatar: string;

    // Role values:
    //  + 0: normal user
    //  + 1: manager
    //  + 2: admin
    @Column({
        name: 'role',
        type: 'smallint',
        default: 0,
        enum: [0, 1, 2],
    })
    role: number;

    @Column({
        name: 'is_active',
        type: 'smallint',
        default: 0
    })
    isActive: number;

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}
