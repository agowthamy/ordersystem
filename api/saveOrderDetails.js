var sql = require('../db_connection');

const Order = function(order) {
    this.FirstName = order.fname;
    this.LastName = order.lname;
    this.ContactNumber = order.contactnumber;
    this.DeliveryAddress = order.deliveryaddress;
    this.ItemCode = order.itemcode;
    this.ItemQuantity = order.itemquantity;
  };
  Order.create= (newOrder, result) => {
    sql.query("INSERT INTO ordersystemdb.order SET ?", newOrder, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created order: ", { id: res.insertId, ...newOrder });
      result(null, { id: res.insertId, status: "Approved", ...newOrder });
    });
  };

  module.exports = Order;