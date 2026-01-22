import { Body, Controller, Post, Req } from '@nestjs/common';

@Controller('auth')
export class AuthControllerV1 {
  constructor() {}

  //#region  registred user
  @Post('signup')
  async funSignup(@Body() body) {}
  //#endregion
}
