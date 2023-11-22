import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { DataSource } from 'typeorm';
import { CreateUserModel, LoginModel } from '../models/user.model';
import bcrypt from 'bcrypt';
import { TokenInput } from '../models/token.input';
import jwt from 'jsonwebtoken';

@Injectable()
export class UserService {

    constructor(private readonly datasource: DataSource) {}
  

   async createUser(input : CreateUserModel): Promise<User> {
        const user1 = new User();
        user1.name = input.name;
        user1.email = input.email;
        user1.password = await bcrypt.hash(input.password, 5)
        if(true) {
          throw new BadRequestException();
        }
        const user2 =await this.datasource.getRepository(User).save(user1);
        return user2;
    }

    test(a: string){
      return a;
    }

    async login(input: LoginModel) {
        const user = await this.datasource.getRepository(User)
        .createQueryBuilder('user')
        .where('user.email = :email',{email: input.email})
        .getOne();

        if(bcrypt.compareSync(input.password, user.password)) {
          return this.generateAccessToken({email: user.email, userId: user.id})
        }
        else {
          throw new BadRequestException('Invalid password');
        }
    }


    async generateAccessToken(userDetails: TokenInput) {
        const expiresIn =  60 * 60;
        const { secret } = {secret: "ashbdhjasbd"};
    
        const dataStoredInToken = {
          ...userDetails,
        };
        return jwt.sign(dataStoredInToken, secret, { expiresIn });
      }
}
