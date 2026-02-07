const TotalPocMon=10;

let items = [];

const newId  = items.length + 1;

const newItem = {
  id: newId,
  name: String,
  price: Number
};




addProduct = document.getElementById("add");
addProduct.addEventListener("click",calculate);

function calculate(){

    productName= document.getElementById("prodName").value;
    productCost= document.getElementById("prodCost").value;

    newItem.name = productName;
    newItem.price = productCost;
    
    items.push(newItem);
    
    console.log(items)
}
