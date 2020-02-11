import axios from 'axios';
const saveDetails = (f_name, l_name, contact_number, delivery_address, item_code, item_quantity) => {
 
    try {
        // let result = await fetch('http://localhost:3003/order',{
        //     method : 'post',
        //     mode: 'no-cors',
        //     headers: {
        //         'Accept' : 'application/json',
        //         'Content-type' : 'application/json'
        //     },
        //     body: JSON.stringify(
        //         {
        //             "fname" : f_name,
        //             "lname" : l_name,
        //             "contactnumber" : contact_number,
        //             "deliveryaddress" : delivery_address,
        //             "itemcode" : item_code,
        //             "itemquantity" : item_quantity
        //         }
        //     )

        // }
        // );
        // alert(result);
        // return result;
        let orderObject =
            {
                "fname": f_name,
                "lname": l_name,
                "contactnumber": contact_number,
                "deliveryaddress": delivery_address,
                "itemcode": item_code,
                "itemquantity": item_quantity
    
            }
        
        axios.post('http://localhost:3003/order',JSON.stringify(orderObject) )
        .then(response => {
            // console.log("Id: "+response.data.id + " Status : "+response.data.status);
            alert("Your Order ID "+response.data.id + " has been "+response.data.status);
           return (response.data.status);
        })
        .catch( error => {
            alert("Error occured when create your order "+ error);
            return error;
        })
    }
    catch (e) {
        console.log(e);
    }

}


export default saveDetails;