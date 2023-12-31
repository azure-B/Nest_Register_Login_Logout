import { Module } from '@nestjs/common';
import { emailVerifyService } from './email-verify.service';
import { emailVerifyController } from './email-verify.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { mailerConfigService } from 'config/mailer.config';
import { verifyDBModule } from 'src/dbcontroll/dbcontroll.module';
@Module({
  imports: [
    MailerModule.forRootAsync({ useClass: mailerConfigService }),
    verifyDBModule,
  ],
  providers: [emailVerifyService],
  controllers: [emailVerifyController],
})
export class emailVerifyModule {}
