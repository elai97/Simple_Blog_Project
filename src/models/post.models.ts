import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "posts",
})
export class Posts extends Model {
  @Column({
    type: DataType.STRING,
    // allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.STRING,
    // allowNull: false,
  })
  content!: string;
}