import { AbstractEntity } from "../../abstract.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends AbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  public id!: string;

  @Column({ nullable: false })
  public name!: string;

  @Column({ nullable: false })
  public email!: string;

  @Column({ nullable: false })
  public password!: string;
  
}