const express = require("express");
const next = require("next");

const routes = require("../routes");

const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dir: ".", dev });
const handler = routes.getRequestHandler(app);

const createServer = () => {
  const server = express();
  server.get("*", (req, res) => {
    handler(req, res);
  });
  return server;
};

const server = createServer();
app.prepare().then(() => {
  server.listen(port, () => console.log("running at port 3000"));
});
