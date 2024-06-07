import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { OtpModule } from '../otp/otp.module';

@Module({
  imports: [SequelizeModule.forFeature([User]), OtpModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
