import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, ManyToOne } from 'typeorm';
import { CashRegister } from './CashRegister';
import { Shop } from './Shop';

enum Shifts {
  day,
  night
};
@Entity()
export class Cashier {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  firstName!: string;

  @Column({ length: 100 })
  lastName!: string;

  @Column({ length: 1 })
  sex!: string;

  @Column()
  age!: number;

  @Column()
  experience!: number;

  @Column({
    type: 'enum',
    enum: Shifts,
   })
  worksInShifts!: Shifts;

  @Column({ length: 100 })
  previousPlaceOfWork!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToOne(() => CashRegister, cashRegister => cashRegister.cashier)
  cashRegister: CashRegister;

  @ManyToOne(() => Shop, shop => shop.cashier)
  shop: Shop;
}
