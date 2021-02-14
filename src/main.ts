import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UnauthorizedErrorFilter } from './filters/unauthorized-error.filter';
import { AuthAdapter } from './adapters/auth.adapter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalFilters(new UnauthorizedErrorFilter());

  app.useWebSocketAdapter(new AuthAdapter(app));

  await app.listen(3000);
}

bootstrap();
