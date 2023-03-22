// (function() {
// 	'use strict';

// 	var tinyslider = function() {
// 		var el = document.querySelectorAll('.testimonial-slider');

// 		if (el.length > 0) {
// 			var slider = tns({
// 				container: '.testimonial-slider',
// 				items: 1,
// 				axis: "horizontal",
// 				controlsContainer: "#testimonial-nav",
// 				swipeAngle: false,
// 				speed: 700,
// 				nav: true,
// 				controls: true,
// 				autoplay: true,
// 				autoplayHoverPause: true,
// 				autoplayTimeout: 3500,
// 				autoplayButtonOutput: false
// 			});
// 		}
// 	};
// 	tinyslider();




// 	var sitePlusMinus = function() {

// 		var value,
//     		quantity = document.getElementsByClassName('quantity-container');

// 		function createBindings(quantityContainer) {
// 	      var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
// 	      var increase = quantityContainer.getElementsByClassName('increase')[0];
// 	      var decrease = quantityContainer.getElementsByClassName('decrease')[0];
// 	      increase.addEventListener('click', function (e) { increaseValue(e, quantityAmount); });
// 	      decrease.addEventListener('click', function (e) { decreaseValue(e, quantityAmount); });
// 	    }

// 	    function init() {
// 	        for (var i = 0; i < quantity.length; i++ ) {
// 						createBindings(quantity[i]);
// 	        }
// 	    };

// 	    function increaseValue(event, quantityAmount) {
// 	        value = parseInt(quantityAmount.value, 10);

// 	        console.log(quantityAmount, quantityAmount.value);

// 	        value = isNaN(value) ? 0 : value;
// 	        value++;
// 	        quantityAmount.value = value;
// 	    }

// 	    function decreaseValue(event, quantityAmount) {
// 	        value = parseInt(quantityAmount.value, 10);

// 	        value = isNaN(value) ? 0 : value;
// 	        if (value > 0) value--;

// 	        quantityAmount.value = value;
// 	    }

// 	    init();

// 	};
// 	sitePlusMinus();


// })()



//Product’s Objects should then be stored in an array, like so:

let products = [
    {
      "id": 1,
      "title": "Nordic Chair",
      "price": 899.85,
      "description": "Comfortable and light",
      "category": "furniture",
      "image": "images/product-3.png",
      "count": 0,
    },
    {
        "id": 2,
        "title": "Kruzo Aero Chair",
        "price": 1009.95,
        "description": "laptop with some details",
        "category": "computers",
        "image": "images/product-1.png",
        "count": 0,
      },

      {
        "id": 3,
        "title": "Small Table",
        "price": 500.70,
        "description": "laptop with some details",
        "category": "accessories",
        "image": "images/img-grid-3.jpg",
        "count": 0,
      },
      {
        "id": 4,
        "title": "Large Lamp",
        "price": 2000.95,
        "description": "laptop with some details",
        "category": "accessories",
        "image": "images/img-grid-2.jpg",
        "count": 0,
      },

  ];

  function displayProducts() {
    let productContainer = document.getElementById("product-container");
    if (productContainer) {

// You should loop through your products array and for each product you should
//  create a new card, which should show the image for the products, along with the other detailes.

    for (let i = 0; i < products.length; i++) {
      let product = products[i];

      let card = document.createElement("div");
      card.classList.add("col-12", "col-md-4", "col-lg-3", "mb-5");

      let productLink = document.createElement("a");
      productLink.classList.add("product-item");
     // productLink.href = "cart.html";

      let productImage = document.createElement("img");
      productImage.classList.add("img-fluid", "product-thumbnail");
      productImage.src = product.image;
      productLink.appendChild(productImage);

      let productTitle = document.createElement("h3");
      productTitle.classList.add("product-title");
      productTitle.textContent = product.title;
      productLink.appendChild(productTitle);

      let productPrice = document.createElement("strong");
      productPrice.classList.add("product-price");
      productPrice.textContent = "$" + product.price.toFixed(2);
      productLink.appendChild(productPrice);

      let crossIcon = document.createElement("span");
      crossIcon.classList.add("icon-cross");

      let crossImage = document.createElement("img");



      crossImage.classList.add("img-fluid");
      crossImage.src = "images/cross.svg";

      crossIcon.appendChild(crossImage);
      productLink.appendChild(crossIcon);
      card.appendChild(productLink);
      productContainer.appendChild(card);

    }
}
}

//add product to array
  function addProduct() {
    let id = products.length + 1;
    let title = document.getElementById("title").value;
    let price = parseFloat(document.getElementById("price").value);
    let description = document.getElementById("description").value;
    let category = document.getElementById("category").value;
    let image = document.getElementById("image").value;
    let count = parseFloat(document.getElementById("count").value);

    let product = {

      id,
      title,
      price,
      description,
      category,
      image,
      count,
    };

    products.push(product);
    displayProducts();
  }

  displayProducts();

//Numbers Code

  let cards = document.querySelectorAll('.icon-cross');

  for ( let i=0; i < cards.length ; i++){
      cards[i].addEventListener('click', () =>{
          cardNumbers(products[i]);
          totalCost(products[i]);
      })


  }
  //function to display number of product to cart
  function onLoadCartNumbers(){
      let productNumbers = localStorage.getItem('cardNumbers');

      if(productNumbers){
      document.querySelector('.cartt span').textContent = productNumbers ;
      }

  }
//function to store number of porduct to local storage
  function cardNumbers(product){
      let productNumbers = localStorage.getItem('cardNumbers');
      productNumbers = parseFloat(productNumbers);

      if(productNumbers){
          localStorage.setItem('cardNumbers', productNumbers + 1);
          document.querySelector('.cartt span').textContent = productNumbers + 1;
        //  console.log(productNumbers)

      }else{
          localStorage.setItem('cardNumbers',  1);
          document.querySelector('.cartt span').textContent = 1;

      }

      setItem(product);

  }

  function setItem(product){
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems !== null){

        if(cartItems[product.title] == undefined){
            cartItems = {
                ...cartItems,
                [product.title] : product
            }
        }

        cartItems[product.title].count += 1 ;
    }else{
        product.count = 1;
        cartItems = {
            [product.title] : product
        }
    }


    localStorage.setItem('productInCart' , JSON.stringify(cartItems) );

  }
//TOTAL COST FUNCTION
  function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');


    if(cartCost != null){
        cartCost = parseFloat(cartCost);

        localStorage.setItem('totalCost', cartCost + product.price);

    }else{
        localStorage.setItem('totalCost', product.price);

    }
  }


  function displayCart(){

    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);
    let productSection = document.querySelector('.product-row');
    let totalSection = document.querySelector('.totalPrice');
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItems);
    if(cartItems && productSection){
        productSection.innerHTML = '';
        Object.values(cartItems).map(item =>{
            productSection.innerHTML += `
            <tr>
                          <td class="product-thumbnail">
                            <img src="${item.image}" alt="Image" class="img-fluid">
                          </td>
                          <td class="product-name">
                            <h2 class="h5 text-black">${item.title}</h2>
                          </td>
                          <td>${item.price}</td>
                          <td>
                            <div class="input-group mb-3 d-flex align-items-center quantity-container" style="max-width: 120px;">
                              <div class="input-group-prepend">
                                <button class="btn btn-outline-black decrease" type="button">&minus;</button>
                              </div>
                              <input type="text" class="form-control text-center quantity-amount" value="${item.count}" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
                              <div class="input-group-append">
                                <button class="btn btn-outline-black increase" type="button">&plus;</button>
                              </div>
                            </div>

                          </td>
                          <td>${item.count * item.price}</td>
                          <td><a href="#" class="btn btn-black btn-sm delete-btn">X</a></td>
                        </tr>
            `

        });



  // add event listener to delete buttons
      let deleteButtons = document.querySelectorAll('.delete-btn');
      for(let i=0; i<deleteButtons.length; i++){
          deleteButtons[i].addEventListener('click', () => {
              let productName = deleteButtons[i].parentElement.parentElement.querySelector('.product-name').textContent.trim();
              let productCount = parseFloat(deleteButtons[i].parentElement.parentElement.querySelector('.quantity-amount').value);
              let productPrice = parseFloat(deleteButtons[i].parentElement.parentElement.querySelector('td:nth-child(3)').textContent.replace('$',''));
              let cartItems = JSON.parse(localStorage.getItem('productInCart'));
              let cartCost = parseFloat(localStorage.getItem('totalCost'));
              // remove item from cart
              localStorage.setItem('cardNumbers', parseFloat(localStorage.getItem('cardNumbers')) - productCount);
              delete cartItems[productName];
              localStorage.setItem('productInCart', JSON.stringify(cartItems));
              localStorage.setItem('totalCost', cartCost - productCount * productPrice);
              displayCart();
              onLoadCartNumbers();
          });
      }
  }


     if(cartItems && totalSection){
        totalSection.innerHTML += `
        <div class="col-md-6 ">
        <span class="text-black">Total</span>
      </div>
      <div class="col-md-6 text-right ">
      <strong class="text-black">$${cartCost}</strong>

      </div>

        `

    }

  }


  onLoadCartNumbers();
  displayCart();

