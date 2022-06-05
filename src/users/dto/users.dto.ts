import { IsString, IsInt, IsDate, IsNumber, IsBoolean } from 'class-validator';

export class UsersDto {
  @IsString()
  firstName?: string;

  @IsString()
  lastName: string;

  @IsString()
  birthday: Date | string;

  @IsNumber()
  сompanyId: number | null;

  @IsNumber()
  educationId: number;

  @IsNumber()
  regionId: number;

  @IsBoolean()
  visible: boolean;
}
