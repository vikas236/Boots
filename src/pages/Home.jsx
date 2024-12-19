import "../css/home.css";
import essentials from "./essentials";
import hero_img from "../assets/famous_boots.png";
import shoe0 from "/src/assets/shoe0.jpg";
import shoe1 from "/src/assets/shoe1.webp";
import shoe2 from "/src/assets/shoe2.webp";

function Home() {
  function DesignLoop() {
    document.addEventListener("DOMContentLoaded", () => {
      const carousel = document.querySelector(".latest_designs");

      // Pause animation on hover
      carousel.addEventListener("mouseover", () => {
        carousel.style.animationPlayState = "paused";
      });

      // Resume animation when not hovering
      carousel.addEventListener("mouseout", () => {
        carousel.style.animationPlayState = "running";
      });
    });

    return (
      <div className="latest_designs carousel">
        <div className="carousel-images">
          <img src="image1.jpg" alt="Image 1" />
          <img src="image2.jpg" alt="Image 2" />
          <img src="image3.jpg" alt="Image 3" />
          <img src="image4.jpg" alt="Image 4" />
        </div>
      </div>
    );
  }

  function addToCart(e) {
    const price = e.target.parentElement.childNodes[0].childNodes[1].innerHTML;
    const image = e.target.parentElement.parentElement.childNodes[0].src;
    const cart = JSON.parse(localStorage.getItem("boots_cart")) || [];
    let equalproductno = 0;
    let product_quantity = 1;

    cart.forEach((e, i) => {
      if (essentials.shallowCompare({ price, image }, e)) {
        equalproductno = i + 1;
        product_quantity = e.product_quantity + 1;
      }
    });

    if (equalproductno)
      cart[equalproductno - 1] = { price, image, product_quantity };
    else cart.push({ price, image, product_quantity });

    localStorage.setItem("boots_cart", JSON.stringify(cart));
    essentials.updateCartSize(cart);
  }

  return (
    <div className="home">
      <div className="hero">
        <div className="left">
          <img src={hero_img} alt="" />
          <h2>Kickstart Your Style!</h2>
          <span>Step into a world of charm and playfulness!</span>
          <div className="social_media">
            <i className="bx bxl-facebook-circle"></i>
            <i className="bx bxl-twitter"></i>
            <i className="bx bxl-linkedin"></i>
            <i className="bx bxl-github"></i>
          </div>
        </div>
        <div className="right">
          <div className="box a">
            <span className="tagline">Hello There!</span>
            <h2>
              Here at Boots, we bring playful charm to life with unique and
              imaginative boot designs crafted for every adventure
            </h2>
            <span className="availability">
              <span>Boots Available for Sale</span>
            </span>
            <button>Subscribe</button>
          </div>
          <div className="box b">
            <h3>Latest Designs</h3>
            <DesignLoop />
          </div>
        </div>
      </div>
      <div className="shop">
        <h1>Find Your Perfect Pair Today!</h1>
        <p>
          Explore our collection of unique and stylish boots, crafted to add
          charm and personality to every step you take!
        </p>
        <div className="products">
          <div className="product">
            <img src={shoe0} alt="" />
            <div className="details">
              <span className="price">
                Price: <span className="price_no"> ₹5</span>
              </span>
              <button onClick={addToCart}>Add to Cart</button>
            </div>
          </div>
          <div className="product">
            <img src={shoe1} alt="" />{" "}
            <div className="details">
              <span className="price">
                Price: <span className="price_no"> ₹2</span>
              </span>
              <button onClick={addToCart}>Add to Cart</button>
            </div>
          </div>
          <div className="product">
            <img src={shoe2} alt="" />{" "}
            <div className="details">
              <span className="price">
                Price: <span className="price_no"> ₹10</span>
              </span>
              <button onClick={addToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
