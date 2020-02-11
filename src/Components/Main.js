import React, { useState } from 'react';
import { useInput } from './Hooks/input-hook';
// import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import './Main.css';
import saveDetails from './Services/SaveOrderdetails';

export default function Main(props) {
  const { value: firstName, bind: bindFirstName, reset: resetFirstName } = useInput('');
  const { value: lastName, bind: bindLastName, reset: resetLastName } = useInput('');
  const { value: contactnumber, bind: bindContactNumber, reset: resetContactNumber } = useInput('');
  const { value: deliveryaddress, bind: bindDeliveryAddress, reset: resetDeliveryAddress } = useInput('');
  const { value: itemquantity, bind: bindItemQuatity, reset: resetItemQuatity } = useInput('');
  var log = require('console-log-level')({ level: 'info' })
  const [ItemCodes] = useState(['I01', 'I02', 'I03', 'I04', 'I05', 'I06', 'I07', 'I08', 'I09', 'I10']);
  const Add = ItemCodes.map(Add => Add
  )
  let itemcode = '';


  const handleSubmit = (evt) => {
    evt.preventDefault();
    let selectElement =
      document.querySelector('#select1');
    //     const SimpleNodeLogger = require('simple-node-logger'),
    //     opts = {
    //         logFilePath:'./logfile.log',
    //         timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS'
    //     },
    // log = SimpleNodeLogger.createSimpleLogger( opts );
    itemcode = selectElement.value;
    // alert(`Submitting Name ${firstName} ${lastName} ${contactnumber} ${deliveryaddress} ${itemcode} ${itemquantity}`);
    try {
      saveDetails(`${firstName}`, `${lastName}`, `${contactnumber}`, ` ${deliveryaddress}`, ` ${itemcode}`, `${itemquantity}`);
    }
    catch (e) {
      log.error("Something went wrong \n" + e);
    }
    resetFirstName();
    resetLastName();
    resetContactNumber();
    resetDeliveryAddress();
    resetItemQuatity();
  }
  return (
    <div className="form-wrapper">
      <h3>Please place your order</h3>
      <form onSubmit={handleSubmit}>
        <br />
        <div className="form-group">
          <label className="">First Name: </label>
          <input type="text" className="form-control"  {...bindFirstName} />
        </div>

        <div className="form-group">
          <label>Last Name: </label>
          <input type="text" className="form-control"  {...bindLastName} />
        </div>

        <div className="form-group">
          <label>Contact number: </label>
          <input type="text" className="form-control"  {...bindContactNumber} />
        </div>

        <div className="form-group">
          <label>Delivery Address: </label>
          <input type="text" className="form-control"  {...bindDeliveryAddress} />
        </div>

        <div className="form-group">
          <label>Item code: </label>
          < select id="select1">
            {
              Add.map((value, key) => <option value={value}>{value}</option>)
            }
          </select >
        </div>

        <div className="form-group">
          <label>Item quantity: </label>
          <input type="number" className="form-control"  {...bindItemQuatity} />
        </div>

        <button type="submit" className="btn btn-primary ">Order</button>
      </form>
    </div>
  );
}