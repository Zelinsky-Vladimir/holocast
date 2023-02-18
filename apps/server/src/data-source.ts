import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.NX_PGHOST,
  port: 5432,
  username: process.env.NX_PGUSER,
  password: process.env.NX_PGPASSWORD,
  database: process.env.NX_PGDATABASE,
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});
