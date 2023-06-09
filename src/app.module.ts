import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal:true }),
    MongooseModule.forRoot("mongodb://mongodb:27017/testdb"),
    BookModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
