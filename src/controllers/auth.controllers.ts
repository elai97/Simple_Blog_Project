import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import config from "../configs/auth.configs";

import { Users } from "../models/user.model";

export const signup: RequestHandler = async (req, res, next) => {
    const posts = await Users.create({ ...req.body });
    
  return res
    .status(200)
        .json({ message: "User registered successfully", data: posts });
};

export const signin: RequestHandler = async (req, res, next) => {
  await Users.findOne({
    where: {
      username: req.body.username
    }
  })
    .then((user: any) => {

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      console.log("user:" + user);
      const passwordIsValid: boolean = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      const token = jwt.sign({ id: user.id }, config, {
        expiresIn: 86400 // 24 hours
      });

      
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          accessToken: token
        });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};