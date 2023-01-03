import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
      }),
  );
  const config = new DocumentBuilder()
      .setTitle('API with NestJS')
      .setDescription('API developed throughout the API with NestJS course')
      .setVersion('1.0')
      .addBearerAuth({
          type:"http",
          scheme:'bearer',
          bearerFormat:'JWT',
      } ,'access-token')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.PORT || 5000);
}
bootstrap();