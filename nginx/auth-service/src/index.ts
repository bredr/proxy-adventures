import Koa from "koa";
import { config, routes } from "./config";
import logger from "koa-logger";

const port = config.get("port");
try {
    const app = new Koa();
    const router = routes();
    app.use(logger())
    app.use(router.routes());
    app.use(router.allowedMethods());
    app.listen(port);
    console.log(`Hosting on port ${port}`);

} catch (e) {
    console.error(e);
    process.exit(1);
}
