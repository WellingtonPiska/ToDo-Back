import CentroCusto from '../../centro_custo/entities/CentroCusto';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  OneToMany,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('status')
class Status {
  @PrimaryColumn({ name: 'sta_id_s' })
  id: string;

  @Column({ name: 'sta_nome_s' })
  nome: string;

  @Column({ name: 'sta_ref_s' })
  referencia: string;

  @Column({ name: 'sta_cor_s' })
  cor: string;

  @CreateDateColumn({ name: 'sta_create_d' })
  create: Date;

  @UpdateDateColumn({ name: 'sta_update_d' })
  update: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Status;
