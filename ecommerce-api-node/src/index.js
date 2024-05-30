const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res
    .status(200)
    .send({ message: "Welcome to ecommerce API", status: true });
});

const authRouters = require("./routs/auth.route.js");
app.use("/auth", authRouters);

const userRouters = require("./routs/user.route.js");
app.use("/api/users", userRouters);

const productRouter = require("./routs/product.routes.js");
app.use("/api/products", productRouter);

const adminProductRouter = require("./routs/adminProduct.routes.js");
app.use("/api/admin/products", adminProductRouter);

const cartRouter = require("./routs/cart.routes.js");
app.use("/api/cart", cartRouter);

const cartItemRouter = require("./routs/cartitem.route.js");
app.use("/api/cart_items", cartItemRouter);

const orderRouter = require("./routs/order.routes.js");
app.use("/api/orders", orderRouter);

const adminOrderRouter = require("./routs/adminOrder.routes..js");
app.use("/api/admin/orders", adminOrderRouter);

const reviewRouter = require("./routs/review.routes.js");
app.use("/api/reviews", reviewRouter);

const ratingRouter = require("./routs/rating.routes.js");
app.use("/api/ratings", ratingRouter);
module.exports = app;
