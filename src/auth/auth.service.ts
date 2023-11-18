import { Injectable, ForbiddenException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/createUser.dto';
import { SignInDto } from './dto/signIn.dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private prisma: PrismaService,
  ) {}

  async validateUser(singInDto: SignInDto): Promise<any> {
    const { email, password } = singInDto;
    const user = await this.userService.findByEmail(email);
    const pwMatches = await argon.verify(user.hash, password);
    if (user && pwMatches) {
      const { hash, ...result } = user;
      return result;
    }
    return null;
  }

  async validateUserById(id: number): Promise<any> {
    return this.userService.findById(id);
  }

  async signUp(createUserDto: CreateUserDto) {
    const user = await this.userService.createUser(createUserDto);
    return user;
  }

  async signIn(signInDto: SignInDto) {
    const { email, password } = signInDto;
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new ForbiddenException('Credentials incorrect');
    }
    const pwMatches = await argon.verify(user.hash, password);
    if (!pwMatches) {
      throw new ForbiddenException('Credentials incorrect');
    }
    delete user.hash;
    return user;
  }
}
