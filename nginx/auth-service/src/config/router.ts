import Router from "koa-router";
import {auth} from "../controllers";

export const routes = () => {
    const router = new Router();
    router.get("/", auth)

    return router;
}