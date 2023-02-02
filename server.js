const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db/products.json");
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 5000;

server.use(middlewares);

server.use(router);

server.listen(PORT);
