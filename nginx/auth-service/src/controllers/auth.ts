import { IMiddleware } from "koa-router";
import jwt from "jsonwebtoken";
import { config } from "../config";

const secret = config.get("jwtSecret");

export const auth: IMiddleware = (ctx, _next) => {
  const token = jwt.sign({
    data: "the auth service"
  }, secret, { expiresIn: '1h' });

  ctx.set("x-auth-jwt", token);

  ctx.status = 200;
};
