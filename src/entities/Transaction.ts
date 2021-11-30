import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

import { v4 as uuid } from 'uuid';
import { Category } from './Category';

@Entity('transactions')
class Transaction {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ nullable: false, type: "float", default: 0.0 })
  price: number;

  @Column()
  type: "entrada" | "saida"

  @Column()
  categoryId: string;

  @JoinColumn({ name: 'categoryId' })
  @ManyToOne(() => Category)
  category: Category;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }
}

export { Transaction };