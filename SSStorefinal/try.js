
let items = {
  j1: { name: "Jeans 1", price: 250, stock: 15 },
  j2: { name: "Jeans 2", price: 250, stock: 16 },
  j3: { name: "Jeans 3", price: 250, stock: 17 },
  j4: { name: "Jeans 3", price: 250, stock: 18 },
  s1: {name: "Shirt 1", price: 150, stock: 19},
  s2: {name: "Shirt 2", price: 200, stock: 20},
  s3: {name: "Shirt 3", price: 200, stock: 10},
  s4: {name: "Shirt 4", price: 100, stock: 11},
  p1: {name: "Perfume 1", price: 1000, stock: 12},
  p2: {name: "Perfume 2", price: 1000, stock: 13},
  p3: {name: "Perfume 2", price: 1000, stock: 14},
  p4: {name: "Perfume 2", price: 1000, stock: 9},
  sd1: {name: "Sando 1", price: 100, stock: 3},
  sd2: {name: "Sando 2", price: 100, stock: 4},
  sd3: {name: "Sando 3", price: 10, stock: 2},
  sd4: {name: "Sando 4", price: 100, stock: 21},
  t1: {name: "Toy 1", price: 80, stock: 5},
  t2: {name: "Toy 2", price: 80, stock: 6},
  t3: {name: "Toy 3", price: 80, stock: 7},
  t4: {name: "Toy 4", price: 80, stock: 8},
};
function navigateToOtherPage() {
 
  window.history.back();
}
function add2Cart(itemName, itemKey) {
  if (items[itemKey].stock > 0) {
    // Decrease stock in the items object
    items[itemKey].stock--;
    
    // Update stock in the main page view
    var mainPageStockElement = document.getElementById(itemKey + "-main-stock");
    if (mainPageStockElement) {
      mainPageStockElement.textContent = items[itemKey].stock;
    }
    
    // Update stock in the popup view
    document.getElementById(itemKey + "-stock").textContent = items[itemKey].stock;
    
    // Execute other operations (like adding to cart and showing receipt)
    receipt(itemName, items[itemKey].price);
    alert(`${itemName} added to cart.`);
  } else {
    alert(`${itemName} is out of stock.`);
  }
}


function receipt(itemName, itemPrice) {
  let cItemsElement = document.getElementById('cartitems');
  let cTotalElement = document.getElementById('carttotal');
  
  let cItem = document.createElement('div');
  cItem.textContent = `${itemName} - Php${itemPrice.toFixed(2)}`;
  cItemsElement.appendChild(cItem);

  // Update subtotal
  let currTotal = parseFloat(cTotalElement.textContent);
  cTotalElement.textContent = (currTotal + itemPrice).toFixed(2);
}

function calculateDiscount() {
  // Get the selected discount percentage
  var discountPercentage = 0;
  var discountRadios = document.getElementsByName('discount');
  for (var i = 0; i < discountRadios.length; i++) {
      if (discountRadios[i].checked) {
          discountPercentage = parseFloat(discountRadios[i].value);
          break;
      }
  }

  // Get the current total price
  var cTotalElement = document.getElementById('carttotal');
  var currTotal = parseFloat(cTotalElement.textContent);

  // Calculate the discounted price
  var totalPriceAfterDiscount = currTotal * (1 - discountPercentage);

  // Update the total price in the receipt with the discount applied
  cTotalElement.textContent = totalPriceAfterDiscount.toFixed(2);
}

function validateCheckout() {
  var enteredAmount = parseFloat(document.getElementById('amount').value);
  var totalPriceAfterDiscount = parseFloat(document.getElementById('carttotal').textContent);
  var change=enteredAmount-totalPriceAfterDiscount;

  if (enteredAmount < totalPriceAfterDiscount) {
      alert("The entered amount must be greater than or equal to the total price after discount.");
      event.preventDefault();
  }
  else{
    alert("Order has been sent successfully. Your change is " + change);
    location.reload()}
      
}



function openCart() {
  document.getElementById("formCart").style.display = "block";
}

function closeCart() {
  document.getElementById("formCart").style.display = "none";
}
function openStocks() {
  document.getElementById("formStocks").style.display = "block";
}

function closeStocks() {
  document.getElementById("formStocks").style.display = "none";
}

function addStock(itemKey) {
  // Update stock in the items object
  items[itemKey].stock++;
  
  // Update stock in the popup view
  document.getElementById(itemKey + "-stock").textContent = items[itemKey].stock;
  
  // Update stock in the main page view
  var mainPageStockElement = document.getElementById(itemKey + "-main-stock");
  if (mainPageStockElement) {
    mainPageStockElement.textContent = items[itemKey].stock;
  }
}






function checkOut() {
  alert(`Your order has been sent successfully!`);
  location.reload();
  


}

