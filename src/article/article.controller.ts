import {
  Body,
  Controller, Delete, Get, Param, Patch, Post,
} from '@nestjs/common';
import AppService from './article.service';
import ArticleDto from './dto/article.dto';

@Controller('articles')
export default class ArticleController {
  constructor(private readonly appService : AppService) {}

  @Get('/')
  getAllArticles() {
    return this.appService.getAllArticles();
  }

  @Post('/')
  addArticle(
    @Body() articleDto : ArticleDto,
  ) {
    return this.appService.addArticle(articleDto);
  }

  @Patch('/:id')
  changeArticle(
    @Param()id : string,
    @Body() articleDto : Omit<ArticleDto, 'author'>,
  ) {
    return this.appService.changeArticle(id, articleDto);
  }

  @Delete('/:id')
  deleteArticle(
    @Param()id : string,
  ) {
    return this.appService.deleteArticle(id);
  }
}
