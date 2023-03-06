import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import config from "../configs/auth.configs";

import { Users } from "../models/user.model";

export const signup: RequestHandler = async (req, res, next) => {
  try {
    const posts = await Users.create({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8)
    });
  
    return res
      .status(200)
      .json({ message: "User registered successfully", data: posts });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "An error occurred while registering user", error });
  }
  
};

export const signin: RequestHandler = async (req, res, next) => {
  try {
    const user = await Users.findOne({
      where: {
        username: req.body.username
      }
    });

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
  );


    if (!passwordIsValid) {
      return res.status(401).send({
        message: "Invalid Password!"
      });
    }

    const token = jwt.sign({ user_id: user.user_Id }, config, {
      expiresIn: 86400 // 24 hours
    });


    res.status(200).send({
      user_id: user.user_Id,
      username: user.username,
      email: user.email,
      accessToken: token
    });
  } catch (error) {
    return res.status(500).json({ message: "An error occurred while registering user", error });
  }
};