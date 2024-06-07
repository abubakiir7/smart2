import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { OtpModule } from './modules/otp/otp.module';
import { TripModule } from './modules/trip/trip.module';
import { TransportModule } from './modules/transport/transport.module';
import { JourneyModule } from './modules/journey/journey.module';
import { TicketsModule } from './modules/tickets/tickets.module';
import { CardModule } from './modules/card/card.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_user,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [],
      autoLoadModels: true,
      sync: { alter: true },
      logging: false,
    }),
    UserModule,
    OtpModule,
    TripModule,
    TransportModule,
    JourneyModule,
    TicketsModule,
    CardModule 
  ],
})
export class AppModule {}
