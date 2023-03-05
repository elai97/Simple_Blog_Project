





// import config from "../config/db.config.js";
// import { Sequelize } from "sequelize";
// import { TutorialModel } from "./tutorial.model.js";
// import { TagModel } from "./tag.model.js";

// const sequelize = new Sequelize(
//   config.DB,
//   config.USER,
//   config.PASSWORD,
//   {
//     host: config.HOST,
//     dialect: config.dialect,
//     operatorsAliases: false,
//     pool: {
//       max: config.pool.max,
//       min: config.pool.min,
//       acquire: config.pool.acquire,
//       idle: config.pool.idle,
//     },
//   }
// );

// interface Database {
//   sequelize: Sequelize;
//   Sequelize: typeof Sequelize;
//   tutorial: typeof TutorialModel;
//   tag: typeof TagModel;
// }

// const db: Database = {
//   Sequelize,
//   sequelize,
//   tutorial: TutorialModel.init(sequelize, Sequelize),
//   tag: TagModel.init(sequelize, Sequelize),
// };

// db.tag.belongsToMany(db.tutorial, {
//   through: "tutorial_tag",
//   as: "tutorials",
//   foreignKey: "tag_id",
// });

// db.tutorial.belongsToMany(db.tag, {
//   through: "tutorial_tag",
//   as: "tags",
//   foreignKey: "tutorial_id",
// });

// export default db;