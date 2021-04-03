import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { CashRegister } from './CashRegister';
import { Cashier } from './Cashier';

@Entity()
export class Shop {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  name!: string;

  @Column({ length: 100 })
  city!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToMany(() => CashRegister, cashRegister => cashRegister.shop)
  cashRegister: CashRegister[];


  @OneToMany(() => Cashier, cashier => cashier.shop)
  cashier: Cashier[];
}
