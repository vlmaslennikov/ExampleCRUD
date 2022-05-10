import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  versionKey: false,
  timestamps: true,
  collection: 'articles',
})
export class Article {
  @Prop({ type: String, required: true })
    author : string;

  @Prop({ type: String, required: true })
    text : string;
}

export type ArticleDocument = Article & Document;

const ArticleSchema = SchemaFactory.createForClass(Article);

export default ArticleSchema;
