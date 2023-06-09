import { Controller, Get } from '@nestjs/common';
import { BookService } from './book.service';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('books')
@Controller('book')
export class BookController {

    constructor(private readonly bookservice:BookService) {}

    @Get()
    getMyBook():string {
        return this.bookservice.getHello();
    }

    @Get('create-book')
    createBook():object {
        return this.bookservice.createBook();
    }
}
