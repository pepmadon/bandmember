import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import { JwtPayload } from '../types/jwtPayload.type';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    config: ConfigService,
    private prisma: PrismaService,
    ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

      secretOrKey: config.get('AT_SECRET'),
    });
  } 
  
  validate(payload: JwtPayload) {
    console.log({
      payload,
    });
    return payload
  }



  // async validate(payload: {sub: number, email: string}) {

  //   const user = 
  //       await this.prisma.user.findUnique(
  //           {
  //               where: { id: payload.sub } 
  //           }
  //       );


  //       delete user.hash
  //   return user;
  // }
}
