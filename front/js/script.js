window.onload = function getProducts(products) {
    let url = 'http://localhost:3000/api/products';
    fetch(url).then((response) => 
    response.json().then((data) => {
        console.log(data);
        //let affichage = `<a href="./product.html?id=${products._id}">`;
        let affichage = `<a>`;
        for (let products of data){
            document.getElementById('items')
            affichage += `<a href="./product.html?id=${products._id}">`;
            affichage += `<article> <img src="${products.imageUrl}" alt="${products.altTxt}"> <h3 class="productName">${products.name}</h3> <p class="productDescription">${products.description}</p> </article>`;
            affichage += '</a>';
            document.querySelector("#items").innerHTML = affichage;
        }

    }))
  };

  //console.log('Hello world')