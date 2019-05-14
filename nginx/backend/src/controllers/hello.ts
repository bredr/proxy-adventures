import {IMiddleware} from "koa-router";

export const hello: IMiddleware = (ctx, _next) => {
    ctx.body = `Hello ${ctx.params.name}! I got here from ${ctx.state.jwtdata.data}.`;
    ctx.status = 200;
}