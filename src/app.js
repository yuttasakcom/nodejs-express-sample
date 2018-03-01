const express = require("express");

const app = express();

app.set("host", process.env.HOST || "localhost");
app.set("port", process.env.PORT || 3000);

const routes = require("./routes");
routes(app);

module.exports = app;
