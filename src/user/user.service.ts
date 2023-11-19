import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { SignUpDto } from 'src/auth/dto/signUp.dto';
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
}
