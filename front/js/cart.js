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
            affichage += `<article class="cart__item" data-id="${productID}" data-color="{product-color}">
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
                  <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${productQuantity}">
                </div>
                <div class="cart__item__content__settings__delete">
                  <p id="delete" class="${productTitle}" onclick="removeItems(${index})">Supprimer</p>
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

function removeItems(${index}) {
  console.log(${index}); 
}


