import { Injectable, ForbiddenException } from '@nestjs/common';
import { CreateUserDto } from '../auth/dto/createUser.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async findByUsername(username: string) {
    const user = await this.prisma.user.findUnique({ where: { username } });
    return user;
  }
  async findById(id: number) {
    const user = await this.prisma.user.findUnique({ where: { user_id: id } });
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    return user;
  }
  async createUser(createUserDto: CreateUserDto) {
    const { email, username, password, firstName, lastName } = createUserDto;
    const hash = await argon.hash(password);
    try {
      const user = await this.prisma.user.create({
        data: {
          email,
          username,
          hash,
          first_name: firstName,
          last_name: lastName,
        },
      });
      delete user.hash;
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if ((error.code = 'P2002')) {
          throw new ForbiddenException('Credentials taken');
        }
      }
    }
  }
}
