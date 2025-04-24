import configuration, { AppConfig } from '@config/configuration';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot<AppConfig>({
      isGlobal: true,
      load: [configuration],
    }),
  ],
})
export class AppModule {}
