
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var cors = require('cors')
app.use(cors());
// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to order system." });
});
require("./routes/order.router")(app);
// set port, listen for requests
app.listen(3003, () => {
  console.log("Server is running on port 3003.");
});
