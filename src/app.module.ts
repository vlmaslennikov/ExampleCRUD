import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import ArticleModule from './article/article.module';

@Module({
  imports: [
    ArticleModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService : ConfigService) => ({
        uri: configService.get<string>('DB_MONGO_URI'),
        dbName: 'articles',
      }),
      inject: [ConfigService],
    }),
  ],
})
export default class AppModule {}
