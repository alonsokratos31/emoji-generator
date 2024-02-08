import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthGuard } from './common/auth/auth.guard';
import { BrowserInterceptor } from './common/browser/browser.interceptor';
import { TransformResponseInterceptor } from './common/transform-response/transform-response.interceptor';
import { AllExceptionsFilter } from './common/all-exceptions/all-exceptions.filter';
import { LoggerMiddleware } from './common/logger/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
  const host = `0.0.0.0`;
  // app.use(new LoggerMiddleware());
  // app.useGlobalGuards(new AuthGuard());
  // app.useGlobalInterceptors(new BrowserInterceptor());
  // app.useGlobalInterceptors(new TransformResponseInterceptor()); // Apply the ResponseInterceptor
  // app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(port, host);
}
bootstrap();
