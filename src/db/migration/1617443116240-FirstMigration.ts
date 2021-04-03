import {MigrationInterface, QueryRunner} from "typeorm";

export class FirstMigration1617443116240 implements MigrationInterface {
    name = 'FirstMigration1617443116240'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "shop" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "city" character varying(100) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ad47b7c6121fe31cb4b05438e44" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cash_register" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "cashierId" integer, "shopId" integer, CONSTRAINT "REL_e38cd2003066190fb53cdfb3e3" UNIQUE ("cashierId"), CONSTRAINT "PK_6278251c4df289cd438c5e11df8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cashier" ("id" SERIAL NOT NULL, "firstName" character varying(100) NOT NULL, "lastName" character varying(100) NOT NULL, "sex" character varying(1) NOT NULL, "age" integer NOT NULL, "worksInShifts" character varying(1) NOT NULL, "previousPlaceOfWork" character varying(100) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "shopId" integer, CONSTRAINT "PK_c90575bda3993c4112a4d50e94e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cash_register" ADD CONSTRAINT "FK_e38cd2003066190fb53cdfb3e3b" FOREIGN KEY ("cashierId") REFERENCES "cashier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cash_register" ADD CONSTRAINT "FK_1baf8d0c5db06e503d65aea4b96" FOREIGN KEY ("shopId") REFERENCES "shop"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cashier" ADD CONSTRAINT "FK_fd94164cfa21a7322afbf5a459d" FOREIGN KEY ("shopId") REFERENCES "shop"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cashier" DROP CONSTRAINT "FK_fd94164cfa21a7322afbf5a459d"`);
        await queryRunner.query(`ALTER TABLE "cash_register" DROP CONSTRAINT "FK_1baf8d0c5db06e503d65aea4b96"`);
        await queryRunner.query(`ALTER TABLE "cash_register" DROP CONSTRAINT "FK_e38cd2003066190fb53cdfb3e3b"`);
        await queryRunner.query(`DROP TABLE "cashier"`);
        await queryRunner.query(`DROP TABLE "cash_register"`);
        await queryRunner.query(`DROP TABLE "shop"`);
    }

}
