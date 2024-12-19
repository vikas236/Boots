import "../css/cart.css";

function Cart() {
  function additems() {
    setTimeout(() => {
      const arr = JSON.parse(localStorage.getItem("boots_cart"));
      const cart = document.querySelector(".cart");

      arr.forEach((e) => {
        const cart_item = document.createElement("div");
        cart_item.classList.add("cart_item");
        cart_item.innerHTML = `<img src=${e.image} alt="" />
                              <div className="details">
                                <span className="price">
                                  price: <span className="price_no">${e.price}</span>
                                </span>
                                <label>quantity: 
                              <input type="text" type="number" value=${e.product_quantity} /></label>
                              </div>`;

        cart.appendChild(cart_item);
      });
    }, 50);
  }
  additems();

  return <div className="cart"></div>;
}

export default Cart;
