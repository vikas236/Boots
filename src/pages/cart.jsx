import "../css/cart.css";
import essentials from "./essentials";

function Cart() {
  function additems() {
    setTimeout(() => {
      const cart = document.querySelector(".cart");
      let arr = [];

      if (arr) {
        arr = JSON.parse(localStorage.getItem("boots_cart"));

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
                              </div><i class='bx bx-minus'></i>`;

          removeButton(cart_item);

          cart.appendChild(cart_item);
        });
      } else cart.innerHTML = `<h1>cart empty</h1>`;
    }, 50);
  }

  function removeButton(cart_item) {
    cart_item.childNodes[3].addEventListener("click", () => {
      const arr = JSON.parse(localStorage.getItem("boots_cart"));

      // essentials.shallowCompare(obj)

      console.log(arr);
    });
  }
  additems();

  return <div className="cart"></div>;
}

export default Cart;
