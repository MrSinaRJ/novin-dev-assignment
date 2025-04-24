import configuration, { AppConfig } from '@config/configuration';
import { HealthModule } from '@health/health.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot<AppConfig>({
      isGlobal: true,
      load: [configuration],
    }),
    HealthModule,
  ],
})
export class AppModule {}
