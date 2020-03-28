const {
  receiveWebhook,
  registerWebhook
} = require("@shopify/koa-shopify-webhooks");

const registration = async (host, accessToken, shop, apiVersion) => {
  const registerOrders = await registerWebhook({
    address: `${host}/webhooks/order_transactions/create`,
    topic: "ORDER_TRANSACTIONS_CREATE",
    accessToken,
    shop,
    apiVersion
  });

  if (registerOrders.success) {
    return console.log(
      "Webhook transactions creado:",
      registerOrders.result.data.webhookSubscriptionCreate
    );
  } else {
    return console.log(
      "Hubo un error creando el Webhook:",
      registerOrders.result
    );
  }
};

const webHook = secret => {
  return receiveWebhook(secret);
};

module.exports = {
  registration,
  webHook
};
