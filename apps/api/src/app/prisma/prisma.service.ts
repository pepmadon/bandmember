import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';


@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {

          url: "mysql://root:cmad219@localhost/bandmember",
          //url: config.get('DATABASE_CONN'),
        },
      },
    });
  }

  cleanDb() {
    return this.$transaction([
      this.product.deleteMany(),
      this.user.deleteMany(),
    ]);
  }

}
