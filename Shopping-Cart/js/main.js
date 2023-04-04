const btnCart = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const close = document.querySelector("#cart-close");

btnCart.addEventListener("click", () => {
  cart.classList.add("cart-active");
});

close.addEventListener("click", () => {
  cart.classList.remove("cart-active");
});

document.addEventListener("DOMContentLoaded", loadfood);

function loadfood() {
  loadcontent();
}

function loadcontent() {
  //remove food items from cart

  let btnremove = document.querySelectorAll(".cart-remove");
  btnremove.forEach((btn) => {
    btn.addEventListener("click", removeItem);
  });

  //product item change event

  let qtyele = document.querySelectorAll(".cart-quantity");
  qtyele.forEach((input) => {
    input.addEventListener("change", changeqty);
  });

  //product cart
  let cartBtns = document.querySelectorAll(".add-cart");
  cartBtns.forEach((btn) => {
    btn.addEventListener("click", addCart);
  });
 updateTotal();

}

//Remove Item
function removeItem(){
  if(confirm('Are you sure to remove')){

 let title=this.parentElement.querySelector('.cart-food-title').innerHTML;
 itemList=itemList.filter(el=>el=!(title==title));
 this.parentElement.remove();
 loadcontent();



  }





}

//change quantity
function changeqty() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
  loadcontent();
}

let itemList=[];

//Add Cart
function addCart() {
  let food = this.parentElement;

  let title = food.querySelector(".food-title").innerHTML;
  let price = food.querySelector(".food-price").innerHTML;
  let imgSrc = food.querySelector(".food-img").src;

  let newProduct = { title, price, imgSrc };

  //check product already exist in cart

  if(itemList.find((el)=>el.title==newProduct.title)) {
    alert("product already added in cart");
    return;
  }else{
    itemList.push(newProduct);
  }

  let newProductElement = createCartProduct(title, price, imgSrc);
  let element = document.createElement("div");
  element.innerHTML = newProductElement;
  let cartBasket = document.querySelector(".cart-content");
  cartBasket.append(element);
  loadcontent();
}

function createCartProduct(title, price, imgSrc) {
  return `

<div class="cart-box">
<img src= ${imgSrc} class="cart-img">
<div class="detail-box">
<div class="cart-food-title"> ${title}</div>
<div class="price-box">
<div class="cart-price">${price}</div>
<div class="cart-amt">${price}</div>
</div>
<input type="number" value="1" class="cart-quantity">
</div>
<ion-icon name="trash" class="cart-remove"></ion-icon>
</div>
`;
}

function updateTotal()
{

  const cartItems = document.querySelectorAll('.cart-box');
  const totalValue = document.querySelector('.total-price');
  
  let total = 0;

  cartItems.forEach(product=>{

  let priceElement=product.querySelector('.cart-price');
  let price=parseFloat(priceElement.innerHTML.replace("Rs.",""));
  let qty=product.querySelector('.cart-quantity').value;
    total+=(price*qty);
    product.querySelector('.cart-amt').innerText="Rs."+(price*qty);
  


  });

  totalValue.innerHTML='Rs.'+total;

  // Add product count in cart icon
  
 const cartCount = document.querySelector('.cart-count');
 let count = itemList.length;
 cartCount.innerHTML=count;

 if(count==0){
    cartCount.style.display='none';
  }else{
    cartCount.style.display='block';
  }


}

updateTotal();

const btnBuy = document.querySelector(".btn-buy");

btnBuy.addEventListener("click", () => {
  alert('Order Placed');
});




