import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import ArticleController from './article.controller';
import ArticleService from './article.service';
import ArticleSchema from './schema/article.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: 'articles',
          schema: ArticleSchema,
        },
      ],
    ),
  ],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export default class ArticleModule {}
