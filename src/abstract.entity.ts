import {
    DeleteDateColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
  } from 'typeorm';
  
  export abstract class AbstractEntity extends BaseEntity {
    @CreateDateColumn({
      name: 'created_at',
      type: 'timestamp',
      precision: 0,
    })
    public createdAt!: Date;
  
    @UpdateDateColumn({
      name: 'updated_at',
      type: 'timestamp',
      precision: 0,
    })
    public updatedAt!: Date;
  
    @DeleteDateColumn({
      name: 'deleted_at',
      type: 'timestamp',
      precision: 0,
      nullable: true,
      default: null,
    })
    public deletedAt?: Date;
  
    /**
     * Check if an Entity has been deleted or not.
     */
    public isDeleted(): boolean {
      return this.deletedAt != null;
    }
  }
  