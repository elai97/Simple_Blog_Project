import { Sequelize } from "sequelize-typescript";
import { Posts } from "../models/post.models";
import { Users } from "../models/user.model";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

const connection = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  logging: false,
  models: [Posts, Users],
  pool: {}
});

export default connection;