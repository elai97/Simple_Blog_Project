import { Table, Model, Column, DataType, BeforeCreate } from "sequelize-typescript";
import { v4 as uuidv4 } from 'uuid';

@Table({
  timestamps: true,
  tableName: "posts",
})
export class Posts extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: uuidv4,
    primaryKey: true,
  })
  post_Id!: string;
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  content!: string;

  @BeforeCreate
  static addUUID(instance: Posts) {
    instance.post_Id = instance.post_Id.replace(/-/g, "");
  }
}