const Router = require("koa-router");
const router = new Router();
const app = require("../server/app");
const handle = app.getRequestHandler();
const { webHook } = require("../webhooks");
const { verifyRequest } = require("@shopify/koa-shopify-auth");

require("dotenv").config();
const { SHOPIFY_API_SECRET_KEY } = process.env;

// Application controllers
const OrdersController = require("../controllers/orders");

// Application routes

router.get("*", verifyRequest(), async ctx => {
  await handle(ctx.req, ctx.res);
  ctx.respond = false;
  ctx.res.statusCode = 200;
});

router.post(
  "/webhooks/order_transactions/create",
  webHook({ secret: SHOPIFY_API_SECRET_KEY }),
  ctx => OrdersController(ctx)
);

module.exports = router;
