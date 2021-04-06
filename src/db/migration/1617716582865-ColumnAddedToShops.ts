import {MigrationInterface, QueryRunner} from "typeorm";

export class ColumnAddedToShops1617716582865 implements MigrationInterface {
    name = 'ColumnAddedToShops1617716582865'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shop" ADD "address" character varying(100) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shop" DROP COLUMN "address"`);
    }

}
