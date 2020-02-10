module.exports = app => {
    const orders = require("../controllers/order.controller");
  
    // Create a new Order
    app.post("/order", orders.create);
}