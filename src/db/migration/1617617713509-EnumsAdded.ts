import {MigrationInterface, QueryRunner} from "typeorm";

export class EnumsAdded1617617713509 implements MigrationInterface {
    name = 'EnumsAdded1617617713509'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "cash_register_status_enum" AS ENUM('0', '1')`);
        await queryRunner.query(`ALTER TABLE "cash_register" ADD "status" "cash_register_status_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cashier" ADD "experience" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cashier" DROP COLUMN "worksInShifts"`);
        await queryRunner.query(`CREATE TYPE "cashier_worksinshifts_enum" AS ENUM('0', '1')`);
        await queryRunner.query(`ALTER TABLE "cashier" ADD "worksInShifts" "cashier_worksinshifts_enum" NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cashier" DROP COLUMN "worksInShifts"`);
        await queryRunner.query(`DROP TYPE "cashier_worksinshifts_enum"`);
        await queryRunner.query(`ALTER TABLE "cashier" ADD "worksInShifts" character varying(1) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cashier" DROP COLUMN "experience"`);
        await queryRunner.query(`ALTER TABLE "cash_register" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "cash_register_status_enum"`);
    }

}
