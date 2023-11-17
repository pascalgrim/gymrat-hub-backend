import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './user/user.controller';
import { WorkoutController } from './workout/workout.controller';
import { SetController } from './set/set.controller';
import { ExerciseController } from './exercise/exercise.controller';
import { DefaultExerciseModule } from './exercise/default-exercise/default-exercise.module';
import { ExerciseModule } from './exercise/exercise.module';
import { MusclegroupModule } from './musclegroup/musclegroup.module';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ExerciseModule,
    DefaultExerciseModule,
    MusclegroupModule,
  ],
  controllers: [
    AppController,
    UserController,
    WorkoutController,
    SetController,
    ExerciseController,
  ],
  providers: [AppService],
})
export class AppModule {}
