import Koa from "koa";
import { config, routes } from "./config";
import logger from "koa-logger";
import jwt from "koa-jwt";

const port = config.get("port");
const secret = config.get("jwtSecret");

try {
    const app = new Koa();
    const router = routes();
    app.use(logger());
    app.use(jwt({ secret, key: "jwtdata" }));
    app.use(async (ctx, next) => {
        try {
            return await next();
        } catch (err) {
            if (err.status === 401) {
                ctx.status = 401;
                ctx.body = {
                    error: err.originalError ? err.originalError.message : err.message
                };
            } else {
                throw err;
            }
        }
    });
    app.use(router.routes());
    app.use(router.allowedMethods());
    app.listen(port);
    console.log(`Hosting on port ${port}`);

} catch (e) {
    console.error(e);
    process.exit(1);
}
