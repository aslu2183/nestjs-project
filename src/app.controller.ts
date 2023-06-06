import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';



@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, 
    
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/first")
  getFirst():string {
    return "This my stand alone page";
  }

  @Get("/my-json")
  getJson():object {
    return {
      status:true,
      message : "Hi, welcome"
    }
  }
  @Get("/set-redis")
  setRedis():object {
    return this.appService.setRedis();
  }

  @Get("/get-redis")
  getRedisValue():object {
    return this.appService.getRedisValue();
  }

  

}
