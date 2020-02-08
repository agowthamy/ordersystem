var con = require('../db_connection');
var connection = con.getConnection();
// connection.connect();
if(connection.connect())
{
    console.log("Success")
}
var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
    var fname = req.body.fname;
    var lname = req.body.lname;
    var contactnumber = req.body.contactnumber;
    var deliveryaddress = req.body.deliveryaddress;
    var itemcode = req.body.itemcode;
    var itemquantity = req.body.itemquantity;

    connection.query("insert into order values (" + fname + "," + lname + "," + contactnumber + "," + deliveryaddress + "," + itemcode + "," + itemquantity + ")",
        (err, result) => {
            if (err) {
                Send({ "Insert": "Fail" });
            }
            else {
                Send({ "Insert": "Success" });
            }
        }
    )
});

module.exports = router;
