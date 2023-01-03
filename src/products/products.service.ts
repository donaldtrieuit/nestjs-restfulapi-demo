import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateProductDto} from './dto/create-product.dto';
import {UpdateProductDto} from './dto/update-product.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Product} from "./entities/product.entity";

@Injectable()
export class ProductsService {
  constructor(
      @InjectRepository(Product)
      private productsRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const newProduct = this.productsRepository.create(createProductDto);
      await this.productsRepository.save(newProduct);
      return newProduct;
    } catch (error) {
      throw new HttpException(
          'Something went wrong',
          HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    return await this.productsRepository.find();
  }

  async findById(id: number) {
    const product = await this.productsRepository.findOneBy({id});
    if (product){
      return product;
    }
    throw new HttpException(
        'Product with this id does not exist',
        HttpStatus.NOT_FOUND,
    );
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      return await this.productsRepository.update(id, updateProductDto);
    } catch (error){
      throw new HttpException(
          'Something went wrong',
          HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: number) {
    try {
      return await this.productsRepository.delete(id);
    } catch (error){
      throw new HttpException(
          'Something went wrong',
          HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
