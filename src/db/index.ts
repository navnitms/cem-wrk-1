import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export default TypeOrmModule.forRootAsync({
  imports: [],
  inject: [],
  async useFactory() {
    return {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'cem-db',
      username: 'cem-dev-user',
      password: 'cem-dev-password',
      entities: [`${__dirname}/../**/entities/**{.ts,.js}`],
      synchronize: true,
      logging : true,
      namingStrategy: new SnakeNamingStrategy(),
      ssl: false,
    };
  },
} as TypeOrmModuleOptions);
