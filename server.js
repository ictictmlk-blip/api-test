import express from "express"
import * as http from "http"

const app = express();

app.use((req, res) => {
  const now = new Date();
  console.log(`\x1b[36m[${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}]\x1b[36m\t\x1b[0mA request was made from ${req.socket.localAddress} to \x1b[0m\x1b[32m${req.url}\x1b[32m`);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello the Beautifull World');
});

const httpPort = 3000;
http.createServer(app).listen(httpPort, "0.0.0.0", () => {
  const now = new Date();
  console.log(`\x1b[36m[${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}]\tServer listening on port http://0.0.0.0:${httpPort}!\x1b[36m`);
});

