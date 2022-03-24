import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CoffeesModule } from '../coffees/coffees.module';
import { CoffeeRatingService } from './coffee-rating.service';

@Module({
  imports: [
    DatabaseModule.register({
      type: 'postgres',
      host: '192.168.10.85',
      port: 5432,
      username: 'postgres',
      password: '111111',
    }),
    CoffeesModule,
  ],
  providers: [CoffeeRatingService],
})
export class CoffeeRatingModule {}
