import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { DoctorModule } from './doctor/doctor.module';
import { AppointmentModule } from './appointment/appointment.module';
import { CategoryModule } from './category/category.module';
import { DoctorSubscriptionModule } from './doctor_subscription/doctor_subscription.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { MedicineModule } from './medicine/medicine.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    AuthModule,
    BlogModule,
    DoctorModule,
    AppointmentModule,
    CategoryModule,
    DoctorSubscriptionModule,
    SubscriptionModule,
    MedicineModule,
  ],
})
export class AppModule {}
