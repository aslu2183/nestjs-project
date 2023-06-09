import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { Book,BookSchema } from 'src/schema/book.schema';


@Module({
    imports : [
      MongooseModule.forFeature([
        {
          name:Book.name,
          schema:BookSchema
        }
      ]),
    ],
    controllers: [BookController],
    providers: [BookService],
    exports: [MongooseModule] //For getting into Other Modules
  })
export class BookModule {}
