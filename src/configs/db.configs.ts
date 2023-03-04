import { Sequelize } from "sequelize-typescript";
import { Posts } from "../models/post.models";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: '/custom/path/to/.env' })

const connection = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  logging: false,
  models: [Posts],
});

export default connection;