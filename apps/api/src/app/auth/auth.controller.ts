import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";
import { Tokens } from "./types";
import { GetCurrentUser, GetCurrentUserId, Public } from "../common/decorators";
import { RtGuard } from "../common/guards";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService ) {
         
    }
    @Public()
    @Post('signin')
    @HttpCode(HttpStatus.CREATED)
    signin(@Body() dto:AuthDto): Promise<Tokens>{
        console.log({dto,})
        return this.authService.signin(dto);
    }
    @Public()
    @Post('signup')
    @HttpCode(HttpStatus.OK)
    signup(@Body() dto:AuthDto): Promise<Tokens>{
        //console.log({dto,})
        return this.authService.signup(dto);
    }

    @Post('signout')
    @HttpCode(HttpStatus.OK)
    logout(@GetCurrentUserId() userId: number): Promise<boolean> {
      return this.authService.signout(userId);
    }
  
    @Public()
    @UseGuards(RtGuard)
    @Post('refresh')
    @HttpCode(HttpStatus.OK)
    refreshTokens(
      @GetCurrentUserId() userId: number,
      @GetCurrentUser('refreshToken') refreshToken: string,
    ): Promise<Tokens> {
      return this.authService.refreshTokens(userId, refreshToken);
    }

}

