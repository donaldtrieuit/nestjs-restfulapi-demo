import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsString, MaxLength} from "class-validator";

export class CreateProductDto {
    @ApiProperty({
        required: true
    })
    @IsString()
    @MaxLength(255)
    @IsNotEmpty()
    name: string;
}
