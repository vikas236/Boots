import "../css/nav.css";
import essentials from "./essentials";

function Nav() {
  document.addEventListener("DOMContentLoaded", () => {
    essentials.checkUserActivity();
    let arr = localStorage.getItem("boots_cart");

    if (arr) {
      essentials.updateCartSize(arr);
    }
  });

  return (
    <nav>
      <h1 className="logo">Boots</h1>
      <div className="right">
        <a href="/cart" className="cart_icon">
          <i className="bx bxs-cart-alt"></i>
          <span className="cart_size">0</span>
        </a>
        <div className="authentication"></div>
      </div>
    </nav>
  );
}

export default Nav;
