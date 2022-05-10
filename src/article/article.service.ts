import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import ArticleDto from './dto/article.dto';
import { Article } from './schema/article.schema';

@Injectable()
export default class ArticleService {
  constructor(
    @InjectModel('articles')
    private readonly article : Model<Article>,
  ) {}

  getAllArticles() {
    return this.article.find().lean();
  }

  addArticle(articleDto : ArticleDto) {
    return this.article.create(articleDto);
  }

  changeArticle(id : string, articleDto : Omit<ArticleDto, 'author'>) {
    return this.article.updateOne({ _id: new Types.ObjectId(id) }, articleDto).lean();
  }

  deleteArticle(id : string) {
    return this.article.deleteOne({ _id: new Types.ObjectId(id) }).lean();
  }
}
