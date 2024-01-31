import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors({ origin: '*' }));
  app.setGlobalPrefix('api');
  const config = new DocumentBuilder()
    .setTitle('Math Fact')
    .setDescription('The math fact API')
    .setVersion('1.0')
    .addTag('facts')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
