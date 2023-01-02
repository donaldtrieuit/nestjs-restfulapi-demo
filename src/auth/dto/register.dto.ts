import {IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class RegisterUserDto {
    @ApiProperty({
        required: true
    })
    @IsString()
    @MaxLength(255)
    @IsNotEmpty()
    first_name: string;

    @ApiProperty({
        required: true
    })
    @IsString()
    @MaxLength(255)
    @IsNotEmpty()
    last_name: string;

    @ApiProperty({
        required: false,
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        required: true
    })
    @IsNotEmpty()
    username: string;

    @ApiProperty({
        required: true
    })
    @IsNotEmpty()
    password: string;
}
