import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AuthModule} from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma/prisma.module';
import { ContactModule } from './contact/contact.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './common/guards';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule, 
    UserModule, 
    ProductModule, 
    PrismaModule,
    ContactModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    }
  ]

})
export class AppModule {}
