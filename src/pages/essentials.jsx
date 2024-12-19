const essentials = (() => {
  function convertImageToBase64(file) {
    return new Promise((resolve, reject) => {
      if (!file) {
        reject("No file provided.");
        return;
      }

      const reader = new FileReader();

      // When the file is loaded, resolve the promise with the Base64 string
      reader.onload = function (event) {
        resolve(event.target.result);
      };

      // Handle any errors while reading the file
      reader.onerror = function (error) {
        reject("Error reading file: " + error);
      };

      // Start reading the file as a Data URL
      reader.readAsDataURL(file);
    });
  }

  function notificaiton(string) {
    const body = document.querySelector("body");

    const message = document.createElement("span");
    message.innerHTML = string;
    message.className = "notification";

    body.appendChild(message);
    setTimeout(() => {
      message.classList.add("active");
    }, 500);
    setTimeout(() => {
      message.classList.remove("active");
    }, 5500);
    setTimeout(() => {
      message.remove();
    }, 6000);
  }

  function checkUserActivity() {
    const isloggedin = localStorage.getItem("boots_loggedin");

    setTimeout(() => {
      const auth = document.querySelector(".authentication");
      let profile_image = localStorage.getItem("boots_profile_image");

      if (!profile_image) profile_image = "/src/assets/sunflower.jpg";

      if (isloggedin === "true") {
        auth.innerHTML = `<a href="/profile"><img src="${profile_image}" alt="" /></a><a>logout</a>`;
        auth.childNodes[1].className = "logout";
        auth.childNodes[1].addEventListener("click", logout);
      } else if (isloggedin === "false") {
        auth.innerHTML = `<a href="/auth">signup</a>`;
        auth.childNodes[0].className = "signup";
      }
    }, 50);
  }

  function logout() {
    localStorage.setItem("boots_loggedin", false);
    checkUserActivity();
    notificaiton("logged out");
  }

  function updateCartSize(arr) {
    let n = JSON.parse(arr).length;
    setTimeout(() => {
      const cart_size = document.querySelector(".cart_size");
      if (n > 0) {
        cart_size.innerHTML = n;
        cart_size.classList.add("active");
      } else {
        cart_size.classList.remove("active");
      }
    }, 250);
  }

  function shallowCompare(obj1, obj2) {
    // Check if all values match
    for (let key in obj1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }

    return true;
  }

  return {
    convertImageToBase64,
    notificaiton,
    checkUserActivity,
    shallowCompare,
    updateCartSize,
  };
})();

export default essentials;
