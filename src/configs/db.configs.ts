import { Sequelize } from "sequelize-typescript";
import { Posts } from "../models/post.models";
import { Users } from "../models/user.model";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

const connection = new Sequelize(
  {
  dialect: "mysql",
  host: "simpleblogprojectdb.cmuqm1klgj6w.us-east-2.rds.amazonaws.com", // "process.env.DB_HOST",
  username: "root", // process.env.DB_USER,
  password: "mysqlpassword", // process.env.DB_PWD,
  database: "simpleblogprojectdb", // process.env.DB_NAME,
  logging: false,
  models: [Posts, Users],
  pool: {}
});

export default connection;