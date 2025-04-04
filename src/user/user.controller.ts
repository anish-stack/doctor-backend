/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}

    @Get()
    async findAllUser(){
        return await this.userService.findAll();
    }




}

