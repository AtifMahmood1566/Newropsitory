import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CombinedDto } from './users/dto/combined.dto';
import { PositionDto } from './users/dto/position.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return  this.appService.getHello();
  }

  // @Get()
  // async getPosition() : Promise<[PositionDto]>
  // {
  //   return this.appService.findPositions();
  // }
    //comment
  
}
