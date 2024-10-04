const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = 9000;

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log("JSON Server is running");
});
