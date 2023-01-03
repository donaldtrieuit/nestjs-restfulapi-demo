import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DatabasesModule } from './databases/databases.module';
import {ConfigModule} from "@nestjs/config";
import { UsersModule } from './users/users.module';
import {APP_GUARD} from "@nestjs/core";
import {RolesGuard} from "./auth/roles.guard";
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
      ConfigModule.forRoot({
    isGlobal: true,
    }),
    AuthModule,
    DatabasesModule,
    UsersModule,
    ProductsModule
  ],
})
export class AppModule {}
