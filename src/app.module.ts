import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabasesModule } from './databases/databases.module';
import {ConfigModule} from "@nestjs/config";
import { UsersModule } from './users/users.module';

@Module({
  imports: [
      ConfigModule.forRoot({
    isGlobal: true,
    }),
    AuthModule,
    DatabasesModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
