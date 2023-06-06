import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {

    getHello():string {
        return "This Hello From Book Service"
    }
}
