const app = require("./server/app");
const server = require("./server/server");

const port = parseInt(process.env.PORT, 10) || 3000;

(async () => {
  await app.prepare();

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
})();
