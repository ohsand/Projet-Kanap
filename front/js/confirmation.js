let orderId = (new URL(location.href)).searchParams;
let id = orderId.get('orderId');
document.querySelector('#orderId').innerHTML = `${id}`;
eraseBasket();
storage.clear();

function eraseBasket() {
    localStorage.clear();
};