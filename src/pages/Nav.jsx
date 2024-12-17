import "../css/nav.css";

function Nav() {
  document.addEventListener("DOMContentLoaded", checkUserActivity());

  function checkUserActivity() {
    const isloggedin = localStorage.getItem("boots_loggedin");

    setTimeout(() => {
      const auth = document.querySelector(".authentication");
      let profile_image = localStorage.getItem("boots_profile_image");

      if (!profile_image) profile_image = "/src/assets/sunflower.jpg";

      if (isloggedin) {
        auth.innerHTML = `<a href="/profile"><img src="${profile_image}" alt="" /></a>`;
      } else {
        auth.innerHTML = `<a href="/auth">signup</a>`;
        auth.childNodes[0].className = "signup";
      }
    }, 50);
  }

  return (
    <nav>
      <h1 className="logo">Boots</h1>
      <div className="authentication"></div>
    </nav>
  );
}

export default Nav;
