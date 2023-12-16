import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './user/user.controller';
import { WorkoutController } from './workout/workout.controller';
import { SetController } from './set/set.controller';
import { MusclegroupModule } from './musclegroup/musclegroup.module';
import { UserModule } from './user/user.module';
import { SetModule } from './set/set.module';
import { WorkoutModule } from './workout/workout.module';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';
import { WorkoutService } from './workout/workout.service';
import { SetService } from './set/set.service';
import { PrismaService } from './prisma/prisma.service';
import { MusclegroupService } from './musclegroup/musclegroup.service';
import { ExerciseMuscleGroupService } from './musclegroup/exercise-muscle-group/exercise-muscle-group.service';
import { ExerciseModule } from './exercise/exercise.module';
import { ExerciseController } from './exercise/exercise.controller';
import { ExerciseService } from './exercise/exercise.service';
import { ExerciseDayModule } from './exercise-day/exercise-day.module';
import { ExerciseDayService } from './exercise-day/exercise-day.service';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ExerciseModule,

    MusclegroupModule,
    UserModule,
    SetModule,
    WorkoutModule,
    AuthModule,
    ExerciseModule,
    ExerciseDayModule,
  ],
  controllers: [
    AppController,
    UserController,
    WorkoutController,
    SetController,
    ExerciseController,
  ],
  providers: [
    AppService,
    UserService,
    WorkoutService,
    SetService,
    PrismaService,
    MusclegroupService,
    ExerciseMuscleGroupService,
    ExerciseService,
    ExerciseDayService,
    ExerciseMuscleGroupService,
  ],
})
export class AppModule {}
