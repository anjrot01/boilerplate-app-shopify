require("isomorphic-fetch");
require("dotenv").config();
const Koa = require("koa");
const { default: createShopifyAuth } = require("@shopify/koa-shopify-auth");
const session = require("koa-session");
const response = require("koa-respond");
const bodyParser = require("koa-bodyparser");
const cors = require("cors");
// Import routes
const router = require("../routes");

const { default: graphQLProxy } = require("@shopify/koa-shopify-graphql-proxy");

const { ApiVersion } = require("@shopify/koa-shopify-graphql-proxy");

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY, HOST } = process.env;

const server = new Koa();
server.use(session({ secure: true, sameSite: "none" }, server));
server.keys = [SHOPIFY_API_SECRET_KEY];
server.use(
  createShopifyAuth({
    apiKey: SHOPIFY_API_KEY,
    secret: SHOPIFY_API_SECRET_KEY,
    scopes: [
      "read_products",
      "write_products",
      "write_orders",
      "read_orders",
      "read_customers",
    ],
    async afterAuth(ctx) {
      const { shop, accessToken } = ctx.session;
      ctx.cookies.set("shopOrigin", shop, {
        httpOnly: false,
        secure: true,
        sameSite: "none",
      });

      ctx.redirect(`/`);
    },
  })
);
server.use(graphQLProxy({ version: ApiVersion.January20 }));
server.use(bodyParser());
server.use(response());
server.use(router.allowedMethods());
server.use(router.routes());
server.use(cors());

module.exports = server;
