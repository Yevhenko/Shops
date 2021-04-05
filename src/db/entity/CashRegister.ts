import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne, Column } from 'typeorm';
import { Cashier } from './Cashier';
import { Shop } from './Shop';

enum Status {
  enable,
  disable
};

@Entity()
export class CashRegister {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'enum',
    enum: Status,
  })
  status!: Status;

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
