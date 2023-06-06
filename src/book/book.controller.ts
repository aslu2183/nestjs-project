import { Controller, Get } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {

    constructor(private readonly bookservice:BookService) {}

    @Get("/my-book")
    getMyBook():string {
        return this.bookservice.getHello();
    }
}
