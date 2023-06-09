import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from 'src/schema/book.schema';

@Injectable()
export class BookService {
    constructor (@InjectModel(Book.name) private BookModel: Model<Book>) {}

    getHello():string {
        return "This Hello From Book Service"
    }

    async createBook():Promise<Book>{
        const data = await new this.BookModel({title:"Aslam",author:"Azza",price:100}).save()
        return data
    }
}
