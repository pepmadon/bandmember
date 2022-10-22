import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
  const request: Express.Request = ctx
    .switchToHttp()
    .getRequest();
  return request.user;

  // return data ? user && user[data] : user;
});
