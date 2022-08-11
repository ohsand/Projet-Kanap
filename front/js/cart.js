var TotalCost = 0;
var TotalQuantity = 0;
var productTitle, parsedproduct, productID, productCost, productImage, productQuantity, productColor, productName = "";

console.log(localStorage);
  
  let affichage = `<article>`
   for (var entry of Object.entries(localStorage)) {
    console.log(entry);
    productTitle = entry[0];
    parsedproduct = JSON.parse(entry[1]);
    productID = parsedproduct.productid;
    productCost = parsedproduct.productcost;
    productImage = parsedproduct.productimage;
    productQuantity = parsedproduct.productquantity;
    productColor = parsedproduct.productcolor;
    productTotalCost = parsedproduct.producttotalcost;
    productName = parsedproduct.productname;
    TotalCost += parsedproduct.producttotalcost;  
    TotalQuantity += parsedproduct.productquantity;

    document.getElementById('cart__items')
            affichage += `<article class="cart__item" data-id="${productTitle}" data-color="{product-color}">
            <div class="cart__item__img">
            <img src="${productImage}" alt="Photographie d'un canapé">
            </div>
            <div class="cart__item__content">
              <div class="cart__item__content__description">
                <h2>${productName}</h2>
                <p>${productColor}</p>
                <p>${productCost} €</p>
              </div>
              <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                  <p>Qté : ${productQuantity}</p>
                  <input type="number" class="${productTitle}" name="itemQuantity" oninput="changeQuantity(event)" min="1" max="100" value="" placeholder="${productQuantity}">
                </div>
                <div class="cart__item__content__settings__delete">
                  <p id="delete" class="${productTitle}" onclick="removeItems(event)">Supprimer</p>
                </div>
              </div>
            </div>
          </article>`;
            affichage += '</article>';
            document.querySelector("#cart__items").innerHTML = affichage;
        }
console.log(TotalCost);

totalPrice();
function totalPrice() {
    document.getElementById('totalPrice').innerHTML = TotalCost;
}

totalQuantity();
function totalQuantity() {
    document.getElementById('totalQuantity').innerHTML = TotalQuantity;
}

function removeItems(event) {
  console.log(event.target.className);
  let itemToRemove = event.target.className;
  window.localStorage.removeItem(event.target.className);
  location.reload();
}

function changeQuantity(event) {
  console.log(event.target.className);
  let itemToChangeQuantity = event.target.className;
  var val = document.getElementsByClassName(event.target.className)[0].value;
  JSON.parse(localStorage.getItem(itemToChangeQuantity));
  console.log(JSON.parse(localStorage.getItem(itemToChangeQuantity)));
  // > shows localstorage item in console
  var tempProduct = JSON.parse(localStorage.getItem(itemToChangeQuantity));
  
  console.log(tempProduct.productquantity);
  var tempQuantity = Number(val);
  console.log(tempQuantity);

  tempProduct.productquantity = tempQuantity;
  console.log(tempProduct);
  const local = localStorage.setItem(tempProduct.productname + tempProduct.productcolor, JSON.stringify(tempProduct));
  //location.reload();
  setTimeout(function(){
    window.location.reload();
 }, 1000);
}

const button = document.getElementById('order');

button.addEventListener('click', function handleClick() {
  console.log('commande');
  var email = document.getElementById('email');
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!filter.test(email.value)) {
  alert('Veuillez saisir une addresse mail valide puis réessayez');
  email.focus;
  return false;
}
});

/*const postForm = document.querySelector('input#order');
postForm.addEventListener('click', (e) => {
  e.preventDefault();
  const firstName = document.querySelector('#firstName').value;
  const lastName = document.querySelector('#lastName').value;
  const address = document.querySelector('#address').value;
  const city = document.querySelector('#city').value;
  const email = document.querySelector('#email').value;
  // condition à valider avant l'envoi
  sendInfo ();
function sendInfo (){
    // création des items attendu par l'api puis envoie
    const contact = { firstName, lastName, address, city, email };
    const products = localStorage;
    //send(contact, products);
    console.log(contact);
    console.log(products);
  }


  
}) */

/*
function send(contact, products) {
  fetch('http://localhost:3000/api/products/order', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      contact, products
    })
  })
    // traitement de la reponse api
    .then(function (res) {
      res.json().then(data => {
        console.log(data)
        console.log("orderId", data.orderId)
        //isoler le string orderId
        // let id = data[Object.keys(data)[Object.keys(data).length - 1]]
        // passer l'id dans l'url
        // console.log(id)
        localStorage.removeItem("basket");
        window.location.href = `confirmation.html?orderId=${data.orderId}`
      })
    })
}


//Create object 
/*
const contact {
  firstName = 
  lastName = 
  address = 
  city = 
  email = 
}*/

const postForm = document.querySelector("input#order");
postForm.addEventListener('click', (e) => {
  e.preventDefault();
  const firstName = document.querySelector('#firstName').value;
  const lastName = document.querySelector('#lastName').value;
  const address = document.querySelector('#address').value;
  const city = document.querySelector('#city').value;
  const email = document.querySelector('#email').value;
  // condition à valider avant l'envoi
  if (typeof firstName !== 'undefined' &&
    typeof lastName !== 'undefined' &&
    typeof address !== 'undefined' &&
    typeof city !== 'undefined' &&
    typeof email !== 'undefined'
  ) {
    // création des items attendu par l'api puis envoie
    let contact = { firstName, lastName, address, city, email };
    let products = localStorage;
    send(contact, products);
    console.log(products);
  }
  return
});

function send(contact, products) {
  fetch('http://localhost:3000/api/products/order', {
    method: "POST",
    body: JSON.stringify({
      contact, products
    })
  })
    .then(function (res) {
      res.json().then(data => {
        console.log(data)
        console.log("orderId", data.orderId)
        //window.location.href = `confirmation.html?orderId=${data.orderId}`
      })
    })
}