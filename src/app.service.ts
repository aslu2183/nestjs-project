import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient } from 'redis';
type Test  ={
    status? : boolean
    message?: string
    client?  : any
    value?   : string
}
@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}
  getHello(): string {
    console.log(this.configService.get('MONGO_URI'))
    return this.configService.get('MONGO_URI');
  }

  async setRedis():Promise<Test> {
    const data:Test = await this.initilazeRedis()
    if(data.status){
      const client = data.client
      await client.set("my-key","Test My Key");
      console.log("Key Set")
    }
    return data
  }

  async getRedisValue():Promise<object>{
    const data:Test = await this.initilazeRedis()
    if(data.status){
      const client = data.client
      let value = await client.get("my-key");
      console.log("My Value ",value)
      return {
        status : true,
        message : `Redis value for "my-key" is ${value}`  
      }
    }
    return {
      status : false,
      message : "Redis error"  
    }
  }

  initilazeRedis():object{
    return new Promise( async (resolve) => {
      const client = createClient({
        
        socket:{
          host:process?.env?.REDIS_HOST||'127.0.0.1',
          port:parseInt(process.env.REDIS_PORT)||6379
        }

        
      });
      
      client.on('error', (err) => {
        console.log('Redis Client Error', err)
        resolve({status:false, message:`Redis Connection Failed  Aslam ${process.env.REDIS_HOST}`})
      });

      if(!client.isOpen){
        await client.connect();
      }

      resolve({status:true,message:"Reddis Connection Success",client:client})
    })
    
  }
}
