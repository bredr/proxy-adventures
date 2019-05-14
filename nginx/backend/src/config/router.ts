import Router from "koa-router";
import {hello} from "../controllers";

export const routes = () => {
    const router = new Router();
    router.get("/hello/:name", hello);

    return router;
}