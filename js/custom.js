
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


//This ensures that the searchInput variable is not null and the event listener is added after
// the element is loaded in the DOM.
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById("search-input");
    searchInput.addEventListener("input", filterProducts);

//Function to filter products based on the search value entered in the search box
function filterProducts() {
    let searchValue = searchInput.value.trim().toLowerCase();
    let filteredProducts = products.filter(product => {
        return product.title.toLowerCase().includes(searchValue) ||
               product.price.toString().includes(searchValue);
      });
      displayFilteredProducts(filteredProducts);
    }
  });

//This function creates HTML elements to display a list of filtered products on a web page.
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

    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("d-flex", "justify-content-center", "my-3" ,"btn-div");

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.style.padding = "5px 10px";
    deleteButton.style.fontSize = "14px";

    deleteButton.addEventListener("click", function() {
        const index = products.findIndex(p => p.id === product.id);

        if (index !== -1) {
        products.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(products));
        card.remove();
        }
        alert('Product deleted successfully!');

    });

    buttonContainer.appendChild(deleteButton);

    let updateButton = document.createElement("button");
    console.log(updateButton);

    updateButton.textContent = "Update";
    updateButton.classList.add("btn", "btn-primary", "mx-2");
    updateButton.style.padding = "5px 10px";
    updateButton.style.fontSize = "14px";

    updateButton.addEventListener("click", function() {
        console.log('update button');
        // Show the modal with the product information
        let modal = new bootstrap.Modal(document.getElementById("updateProductModal"));
        modal.show();


        // Get the index of the current product
        let productIndex = products.findIndex(function(item) {
          return item.id === product.id;
        });

        // Fill the form fields with the current product information
        document.getElementById("title1").value = products[productIndex].title;
        document.getElementById("price1").value = products[productIndex].price;
        document.getElementById("description1").value = products[productIndex].description;
        document.getElementById("category1").value = products[productIndex].category;
        document.getElementById("count1").value = products[productIndex].count;
        document.getElementById("image1").value = products[productIndex].image;
            console.log(productIndex);


        // Add an event listener to the form submit button
        let submitButton = document.querySelector("#updateProductModal input[type='submit']");
        submitButton.addEventListener("click", function(event) {
          event.preventDefault();

          // Update the product information in the array of products
          products[productIndex].title = document.getElementById("title1").value;
          products[productIndex].price = document.getElementById("price1").value;
          products[productIndex].description = document.getElementById("description1").value;
          products[productIndex].category = document.getElementById("category1").value;
          products[productIndex].count = document.getElementById("count1").value;
          products[productIndex].image = document.getElementById("image1").value;

          // Update the localStorage with the new products array
          localStorage.setItem("products", JSON.stringify(products));

          // Update the product card with the new information
          productTitle.textContent = products[productIndex].title;
          productPrice.textContent = "$" + products[productIndex].price;
          productImage.src = products[productIndex].image;

          const
      modal = bootstrap.Modal.getInstance(document.querySelector("#updateProductModal"));
       modal.hide();
     });



      });


      buttonContainer.appendChild(updateButton);

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

//Function that displays products on a web page.
function displayProducts() {
  let productContainer = document.getElementById("product-container");
  if (productContainer) {

  for (let i = 0; i < products.length; i++) {
    let product = products[i];

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
        const index = products.findIndex(p => p.id === product.id);

        if (index !== -1) {
          products.splice(index, 1);

          localStorage.setItem("products", JSON.stringify(products));

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
updateButton.dataset.productIndex = i;


updateButton.addEventListener("click", function() {
    console.log('update button');
    // Show the modal with the product information
    let modal = new bootstrap.Modal(document.getElementById("updateProductModal"));
    modal.show();


    // Get the index of the current product
    let productIndex = products.findIndex(function(item) {
      return item.id === product.id;
    });

    // Fill the form fields with the current product information
    document.getElementById("title1").value = products[productIndex].title;
    document.getElementById("price1").value = products[productIndex].price;
    document.getElementById("description1").value = products[productIndex].description;
    document.getElementById("category1").value = products[productIndex].category;
    document.getElementById("count1").value = products[productIndex].count;
    document.getElementById("image1").value = products[productIndex].image;
        console.log(productIndex);


    // Add an event listener to the form submit button
    let submitButton = document.querySelector("#updateProductModal input[type='submit']");
    submitButton.addEventListener("click", function(event) {
      event.preventDefault();

      // Update the product information in the array of products
      products[productIndex].title = document.getElementById("title1").value;
      products[productIndex].price = document.getElementById("price1").value;
      products[productIndex].description = document.getElementById("description1").value;
      products[productIndex].category = document.getElementById("category1").value;
      products[productIndex].count = document.getElementById("count1").value;
      products[productIndex].image = document.getElementById("image1").value;

      // Update the localStorage with the new products array
      localStorage.setItem("products", JSON.stringify(products));

      // Update the product card with the new information
      productTitle.textContent = products[productIndex].title;
      productPrice.textContent = "$" + products[productIndex].price;
      productImage.src = products[productIndex].image;

      const
  modal = bootstrap.Modal.getInstance(document.querySelector("#updateProductModal"));
   modal.hide();
 });



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

//The function is used to add a new product to the products array and display it on the web page.
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




//Creates an event listener for each card with the class "icon-cross" on the page.
let cards = document.querySelectorAll('.icon-cross');
//When a card is clicked, it triggers a function that calls two other functions cardNumbers() and totalCost().
for ( let i=0; i < cards.length ; i++){
    cards[i].addEventListener('click', () =>{
        cardNumbers(products[i]);
        totalCost(products[i]);
    })
}


/*function retrieves the number of products that have been added to the cart from the browser local storage
and updates the cart number display on the web page*/
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cardNumbers');
    if(productNumbers){
    document.querySelector('.cartt span').textContent = productNumbers ;
    }
}

//This function is used to update the number of items in the shopping cart stored in local storage
function cardNumbers(product){
    let productNumbers = localStorage.getItem('cardNumbers'); //retrieves the current number of items in the cart from local storage
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cardNumbers', productNumbers + 1);
        document.querySelector('.cartt span').textContent = productNumbers + 1;

    }else{
        localStorage.setItem('cardNumbers',  1);
        document.querySelector('.cartt span').textContent = 1;

    }

    setItem(product);
}

//Function is used to add an item to the cart stored in the localStorage.
function setItem(product){
  let cartItems = localStorage.getItem('productInCart');
  cartItems = JSON.parse(cartItems); // parses it from a JSON string to an object

  if(cartItems !== null){
// If it doesn't exist, it adds the new product object to the cartItems object using
//the spread operator (...) and sets the count property to 1.
      if(cartItems[product.title] == undefined){
          cartItems = {
              ...cartItems,
              [product.title] : product
          }
      }

      cartItems[product.title].count += 1 ;
  }else{

//If the title property already exists in the cartItems object it increments the count property of the existing object by 1.
      product.count = 1;
      cartItems = {
          [product.title] : product
      }
  }
  localStorage.setItem('productInCart' , JSON.stringify(cartItems) );

}

/* Function retrieves the cart items and total cost from the local storage,and then dynamically creates HTML
elements to display the cart items and total cost on the web page.*/
function displayCart(){
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);
    let productSection = document.querySelector('.product-row');
    let totalSection = document.querySelector('.totalPrice');
    let cartCost = localStorage.getItem('totalCost');

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


//Total cost function
function totalCost(product){
  let cartCost = localStorage.getItem('totalCost');
  if(cartCost != null){
      cartCost = parseInt(cartCost);
      localStorage.setItem('totalCost', cartCost + product.price);

  }else{
      localStorage.setItem('totalCost', product.price);

  }
}





onLoadCartNumbers();
displayCart();
