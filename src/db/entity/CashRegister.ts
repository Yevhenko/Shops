import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Cashier } from './Cashier';
import { Shop } from './Shop';

@Entity()
export class CashRegister {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToOne(() => Cashier, cashier => cashier.cashRegister)
  @JoinColumn()
  cashier: Cashier;

  @ManyToOne(() => Shop, shop => shop.cashRegister)
  shop: Shop;
}
