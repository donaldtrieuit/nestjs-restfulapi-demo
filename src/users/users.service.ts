import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./entities/user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UsersService {
  constructor(
      @InjectRepository(User)
      private usersRepository: Repository<User>,
  ) {}

  async findOneByUsername(username: string) {
    const user = await this.usersRepository.findOne({ select: ['id', 'username', 'password', 'firstName', 'lastName', 'avatar', 'email', 'role'], where: { username: username } });
    if (user) {
      return user;
    }
    throw new HttpException(
        'User with this username does not exist',
        HttpStatus.NOT_FOUND,
    );
  }

  async getById(id: number) {
    const user = await this.usersRepository.findOneBy({ id });
    if (user) {
      return user;
    }
    throw new HttpException(
        'User with this id does not exist',
        HttpStatus.NOT_FOUND,
    );
  }

  async create(userData: CreateUserDto) {
    let user = new User();
    user.username = userData.username;
    user.password = userData.password;
    user.firstName = userData.first_name;
    user.lastName = userData.last_name;
    user.email = userData.email;
    const newUser = await this.usersRepository.create(user);
    await this.usersRepository.save(newUser);
    return newUser;
  }
}
