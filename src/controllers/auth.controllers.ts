import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import config from "../configs/auth.configs";

import { Users } from "../models/user.model";

export const signup: RequestHandler = async (req, res, next) => {
  const posts = await Users.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  });

  return res
    .status(200)
    .json({ message: "User registered successfully", data: posts });
};

export const signin: RequestHandler = async (req, res, next) => {
  try {
    let passwordIsValid = false;
    const user = await Users.findOne({
      where: {
        username: req.body.username
      }
    });

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    if (user != null) {
    if (req.body.password == user.password) {
      passwordIsValid = true;
    }
      console.log(passwordIsValid);
    } else {
      console.log("error");
    }

    console.log(passwordIsValid);

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
  } catch (error) {
    console.log("error signing in")
  }
};