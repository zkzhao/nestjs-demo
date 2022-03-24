import { registerAs } from '@nestjs/config';

export default registerAs('coffees', () => ({
  foo: 'bar',
  environment: process.env.NODE_ENV || 'development',
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
}));
