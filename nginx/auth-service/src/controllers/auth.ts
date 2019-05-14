import {IMiddleware} from "koa-router";

export const auth: IMiddleware = (ctx, _next) => {
    ctx.status = Math.random() > 0.5 ? 200 : 401;
}