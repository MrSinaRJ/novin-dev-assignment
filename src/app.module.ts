import { ChatModule } from '@chat/chat.module';
import configuration, { AppConfig } from '@config/configuration';
import { DatabaseModule } from '@database/database.module';
import { HealthModule } from '@health/health.module';
import { MessageModule } from '@message/message.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot<AppConfig>({
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService<AppConfig>) => {
        const dbConfig = configService.get('mongodb');
        return {
          uri: dbConfig.uri,
          user: dbConfig.username,
          pass: dbConfig.password,
          dbName: dbConfig.dbName,
        };
      },
      inject: [ConfigService],
    }),
    HealthModule,
    ChatModule,
    DatabaseModule,
    MessageModule,
  ],
})
export class AppModule {}
