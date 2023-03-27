import { Table, Model, Column, DataType, BeforeCreate } from "sequelize-typescript";
import { v4 as uuidv4 } from 'uuid';

@Table({
  timestamps: false,
  tableName: "users",
})
export class Users extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: uuidv4,
    primaryKey: true,
  })
  user_Id!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    email!: string;
    
    @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @BeforeCreate
  static addUUID(instance: Users) {
    instance.user_Id = instance.user_Id.replace(/-/g, "");
  }
}