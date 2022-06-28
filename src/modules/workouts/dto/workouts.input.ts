import {
    InputType,
    Field,
    registerEnumType
} from '@nestjs/graphql';
import {
    IsString,
    IsNotEmpty,
    MinLength,
    MaxLength,
    IsEnum,
    IsInt,
    IsArray
} from 'class-validator';
import { WorkoutTypeEnum } from '../../../common/enums/workout-type.enum';
import { WorkoutExerciseInput } from './workouts-exercise.input';

registerEnumType(WorkoutTypeEnum, {
    name: 'WorkoutTypeEnum',
    description: 'Types of workouts'
});

@InputType()
export class WorkoutInput {
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    @Field(() => String)
    name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    @Field(() => String)
    description: string;

    @IsNotEmpty()
    @IsEnum(WorkoutTypeEnum)
    @Field(() => WorkoutTypeEnum)
    type: WorkoutTypeEnum;

    @IsNotEmpty()
    @IsInt()
    @Field(() => Number)
    aproxDurationMinutes: number;

    @IsNotEmpty()
    @IsArray()
    @Field(() => [WorkoutExerciseInput])
    exercises: WorkoutExerciseInput[];
}
