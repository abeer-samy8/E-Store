
//Product’s Objects should then be stored in an array, like so:

let products = JSON.parse(localStorage.getItem('products')) || [
  {
    "id": 1,
    "title": "Nordic Chair",
    "price": 899,
    "description": "Comfortable and light",
    "category": "furniture",
    "image": "images/product-3.png",
    "count": 0,
  },
  {
      "id": 2,
      "title": "Kruzo Aero Chair",
      "price": 1009,
      "description": "laptop with some details",
      "category": "computers",
      "image": "images/product-1.png",
      "count": 0,
    },

    {
      "id": 3,
      "title": "Small Table",
      "price": 500,
      "description": "laptop with some details",
      "category": "accessories",
      "image": "images/img-grid-3.jpg",
      "count": 0,
    },
    {
      "id": 4,
      "title": "Large Lamp",
      "price": 2000,
      "description": "laptop with some details",
      "category": "accessories",
      "image": "images/img-grid-2.jpg",
      "count": 0,
    },

];





let searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", filterProducts);

function filterProducts() {
  let searchValue = searchInput.value.trim().toLowerCase();
  let filteredProducts = products.filter(product => {
    return product.title.toLowerCase().includes(searchValue) ||
           product.price.toString().includes(searchValue);
  });
  displayFilteredProducts(filteredProducts);
}

function displayFilteredProducts(filteredProducts) {
  let productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";

  for (let i = 0; i < filteredProducts.length; i++) {
    let product = filteredProducts[i];

        let card = document.createElement("div");
    card.classList.add("col-12", "col-md-4", "col-lg-3", "mb-5");

    let productLink = document.createElement("a");
    productLink.classList.add("product-item");

    let productImage = document.createElement("img");
    productImage.classList.add("img-fluid", "product-thumbnail");
    productImage.src = product.image;
    productLink.appendChild(productImage);

    let productTitle = document.createElement("h3");
    productTitle.classList.add("product-title");
    productTitle.textContent = product.title;
    productLink.appendChild(productTitle);

    let productPrice = document.createElement("strong");
    if (product.price) {
      productPrice.textContent = "$" + product.price;
    }
    productLink.appendChild(productPrice);

    // Create the container for the buttons
    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("d-flex", "justify-content-center", "my-3" ,"btn-div");

    // Create the delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.style.padding = "5px 10px";
    deleteButton.style.fontSize = "14px";

        deleteButton.addEventListener("click", function() {
            // Find the index of the product to delete
            const index = products.findIndex(p => p.id === product.id);

            // Remove the product from the array
            if (index !== -1) {
              products.splice(index, 1);

              // Update the localStorage
              localStorage.setItem("products", JSON.stringify(products));

              // Remove the card from the UI
              card.remove();

            }
            alert('Product deleted successfully!');

          });

    buttonContainer.appendChild(deleteButton);

    // Create the update button
    let updateButton = document.createElement("button");
    updateButton.textContent = "Update";
    updateButton.classList.add("btn", "btn-primary");
    updateButton.style.padding = "5px 10px"; // Set the padding of the button
    updateButton.style.fontSize = "14px";
    updateButton.style.marginLeft = "10px";



    updateButton.addEventListener("click", function() {


      });







    buttonContainer.appendChild(updateButton);

    // Append the button container to the product link
    productLink.appendChild(buttonContainer);

    let crossIcon = document.createElement("span");
    crossIcon.classList.add("icon-cross");

    let crossImage = document.createElement("img");

    crossImage.classList.add("img-fluid");
    crossImage.src = "images/cross.svg";

    crossIcon.appendChild(crossImage);
    productLink.appendChild(crossIcon);
    card.appendChild(productLink);
    productContainer.appendChild(card);



    productContainer.appendChild(card);
  }
}

// Function to update a product
function updateProduct(id, title, price, description, category, count, image) {
    const product = products.find(p => p.id === id);
    if (product) {
      product.title = title;
      product.price = price;
      product.description = description;
      product.category = category;
      product.count = count;
      product.image = image;
    }
    localStorage.setItem('products', JSON.stringify(products));
  }


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
if (product.price) {
  productPrice.textContent = "$" + product.price;
}
productLink.appendChild(productPrice);

// Create the container for the buttons
let buttonContainer = document.createElement("div");
buttonContainer.classList.add("d-flex", "justify-content-center", "my-3" ,"btn-div");

// Create the delete button
let deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";
deleteButton.classList.add("btn", "btn-danger");
deleteButton.style.padding = "5px 10px";
deleteButton.style.fontSize = "14px";

    deleteButton.addEventListener("click", function() {
        // Find the index of the product to delete
        const index = products.findIndex(p => p.id === product.id);

        // Remove the product from the array
        if (index !== -1) {
          products.splice(index, 1);

          // Update the localStorage
          localStorage.setItem("products", JSON.stringify(products));

          // Remove the card from the UI
          card.remove();

        }
        alert('Product deleted successfully!');

      });

buttonContainer.appendChild(deleteButton);

// Create the update button
let updateButton = document.createElement("button");
updateButton.textContent = "Update";
updateButton.classList.add("btn", "btn-primary");
updateButton.style.padding = "5px 10px"; // Set the padding of the button
updateButton.style.fontSize = "14px";
updateButton.style.marginLeft = "10px";



updateButton.addEventListener("click", function() {

  });







buttonContainer.appendChild(updateButton);

// Append the button container to the product link
productLink.appendChild(buttonContainer);

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
  let price = parseInt(document.getElementById("price").value);
  let description = document.getElementById("description").value;
  let category = document.getElementById("category").value;
  let image = document.getElementById("image").value;
  let count = parseInt(document.getElementById("count").value);

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
    productNumbers = parseInt(productNumbers);

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
      cartCost = parseInt(cartCost);

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

                            <input type="text" class="form-control text-center quantity-amount" value="${item.count}" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">

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
            let productName = deleteButtons[i].parentElement.parentElement.querySelector('.product-name').textContent.trim(); // tirm() to removes white spaces from ending and starting of name
            let productCount = parseInt(deleteButtons[i].parentElement.parentElement.querySelector('.quantity-amount').value);
            let productPrice = parseInt(deleteButtons[i].parentElement.parentElement.querySelector('td:nth-child(3)').textContent.replace('$',''));
            let cartItems = JSON.parse(localStorage.getItem('productInCart'));
            let cartCost = parseInt(localStorage.getItem('totalCost'));
            // remove item from cart
            localStorage.setItem('cardNumbers', parseInt(localStorage.getItem('cardNumbers')) - productCount);
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
