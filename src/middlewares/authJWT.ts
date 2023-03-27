import jwt from "jsonwebtoken";
import config from "../configs/auth.configs";

const verifyToken = (req: any, res: any, next: any) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config, (err: any, decoded: any) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};

const authJwt = {
  verifyToken
};

export default authJwt;