import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { DataSourceOptions } from 'typeorm';

const migrationConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'cem-db',
    username: 'cem-dev-user',
    password: 'cem-dev-password',
  migrations: ['dist/migrations/scripts/*.js'],
  entities: [
    __dirname + '/../../**/*.entity.ts',
    __dirname + '/../../**/*.entity.js',
  ],
  synchronize: false,
  namingStrategy: new SnakeNamingStrategy(),
  ssl: false,
} as DataSourceOptions;

export default migrationConfig;
