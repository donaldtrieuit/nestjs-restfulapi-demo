import {IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class LoginDto {
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
