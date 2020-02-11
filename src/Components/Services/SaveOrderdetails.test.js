import saveDetails from './SaveOrderdetails';

test("Test save order details" , () =>{
    expect(saveDetails("Kamal", "Raj", "0786545444","Colombo", "I10",23)).toBe("Approved");
});