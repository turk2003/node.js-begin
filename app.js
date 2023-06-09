const express = require("express");
const app = express();
const port = 3000;
const debug = require("debug", "app");
const morgan = require("morgan");
const path = require("path");
const products = require('./data/product.json')
const productRouter = express.Router();
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
    username: "turk",
    customers: ["turk", "po", "haneul"],
  });
});
productRouter.route("/").get((req, res) => {
  res.render("products",
    products)
});
app.use("/product", productRouter);
app.listen(port, () => {
  debug("listenning on port", port);
});
