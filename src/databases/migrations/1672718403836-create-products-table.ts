import { MigrationInterface, QueryRunner } from "typeorm";

export class createProductsTable1672718403836 implements MigrationInterface {
    name = 'createProductsTable1672718403836'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" BIGSERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
