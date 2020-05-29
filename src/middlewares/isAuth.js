import * as jwt from "express-jwt";

const getTokenFromBody = (req) => {
  if (req.body.jwt && req.body.jwt.split(" ")[0] === "Bearer") {
    return req.body.jwt.split(" ")[1];
  }
};

export default jwt({
  secret: "ERA-secret-sign",
  userProperty: "token",
  getToken: getTokenFromBody,
});
