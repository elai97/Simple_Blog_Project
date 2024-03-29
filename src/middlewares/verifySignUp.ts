import { Users } from './../models/user.model';


const checkDuplicateUsernameOrEmail = (req: any, res: any, next: any) => {
  // Username
  Users.findOne({
    where: {
      username: req.body.username
    }
  }).then((user: any) => {
    
    if (user) {
      res.status(400).send({
        message: "Failed! Username is already in use!"
      });
      return;
    }

    // Email
    Users.findOne({
      where: {
        email: req.body.email
      }
    }).then((user: any) => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
      }

      next();
    });
  });
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail
};

export default verifySignUp;
