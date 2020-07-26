import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './category.entity';
import { QuestionEntity } from './question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity, QuestionEntity])],
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
