const Router = require("koa-router");
const router = new Router();
const app = require("../server/app");
const handle = app.getRequestHandler();
const { verifyRequest } = require("@shopify/koa-shopify-auth");

require("dotenv").config();

// Application routes

router.get("*", verifyRequest(), async (ctx) => {
  await handle(ctx.req, ctx.res);
  ctx.respond = false;
  ctx.res.statusCode = 200;
});

module.exports = router;
