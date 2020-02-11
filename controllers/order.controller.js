const Order = require("../api/saveOrderDetails");

// Create and Save a new Order
exports.create = (req, res) => {

   res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    // Create a Order
    const order = new Order({
      fname : req.body.fname,
      lname : req.body.lname,
      contactnumber : req.body.contactnumber,
      deliveryaddress : req.body.deliveryaddress,
      itemcode : req.body.itemcode,
      itemquantity : req.body.itemquantity
    });
  
    // Save Order in the database
    Order.create(order, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Order."
        });
      else res.send(data);
    });
  };