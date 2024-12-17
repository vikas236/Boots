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
    }, 2500);
    setTimeout(() => {
      message.remove();
    }, 3000);
  }
  notificaiton("hi");

  return { convertImageToBase64, notificaiton };
})();

export default essentials;
