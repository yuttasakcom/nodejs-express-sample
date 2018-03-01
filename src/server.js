const http = require("http");

const app = require("./app");

const server = http.createServer(app);

server.listen(app.get("port"), app.get("host"), err => {
  if (err) return err;

  console.log(
    `Server is running on http://${app.get("host")}/${app.get("port")}`
  );
});
