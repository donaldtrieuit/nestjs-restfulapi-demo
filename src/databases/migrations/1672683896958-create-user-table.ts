import { MigrationInterface, QueryRunner } from "typeorm";

export class createUserTable1672683896958 implements MigrationInterface {
    name = 'createUserTable1672683896958'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" BIGSERIAL NOT NULL, "username" text NOT NULL, "password" text NOT NULL, "first_name" text, "last_name" text, "email" text NOT NULL, "phone_number" text, "avatar" text, "role" smallint NOT NULL DEFAULT '0', "is_active" smallint NOT NULL DEFAULT '0', CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
