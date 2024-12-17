import "../css/profile.css";
import essentials from "./essentials.jsx";

function Profile() {
  let profile_image = localStorage.getItem("boots_profile_image");
  profile_image = profile_image ? profile_image : "/src/assets/sunflower.jpg";

  function showEditor() {
    const profile_editor = document.querySelector(".profile_editor");
    profile_editor.classList.add("active");
  }

  function updateProfile(e) {
    const formData = document.querySelectorAll(".profile_editor input");
    const profile_editor = document.querySelector(".profile_editor");

    formData.forEach(async (e) => {
      if (e.classList.contains("profile_image_input")) {
        await essentials.convertImageToBase64(e.files[0]).then((response) => {
          localStorage.setItem("boots_profile_image", response);
        });
      } else if (e.classList.contains("profile_username_input")) {
        localStorage.setItem("boots_username", e.value);
      } else if (e.classList.contains("profile_password_input")) {
        localStorage.setItem("boots_password", e.value);
      } else if (e.classList.contains("profile_email_input")) {
        localStorage.setItem("boots_email", e.value);
      } else if (e.classList.contains("profile_phone_input")) {
        localStorage.setItem("boots_phone", e.value);
      }
    });

    profile_editor.classList.remove("active");
  }

  return (
    <div className="profile">
      <div className="profile_image">
        <img src={profile_image} alt="" className="profile_image" />
      </div>
      <div>
        <div className="profile_username">
          <label htmlFor="">Username: </label>
          <span>{localStorage.getItem("boots_username")}</span>
        </div>
        <div className="profile_password">
          <label htmlFor="">Password: </label>
          <span>{localStorage.getItem("boots_password")}</span>
        </div>
        <div className="profile_gmail">
          <label htmlFor="">gmail: </label>
          <span>{localStorage.getItem("boots_email")}</span>
        </div>
        <div className="profile_phone">
          <label htmlFor="">phone: </label>
          <span>{localStorage.getItem("boots_phone")}</span>
        </div>
        <button className="edit" onClick={showEditor}>
          edit
        </button>
      </div>

      <div className="profile_editor">
        <div className="profile_image_eidtor">
          <label htmlFor="">upload image</label>
          <input
            type="file"
            className="profile_image_input"
            placeholder="upload image"
          />

          <div className="profile_username_editor">
            <label htmlFor="">Username: </label>
            <input type="text" className="profile_username_input" />
          </div>
          <div className="profile_password_editor">
            <label htmlFor="">Password: </label>
            <input type="password" className="profile_password_input" />
          </div>
          <div className="profile_email_editor">
            <label htmlFor="">email: </label>
            <input type="email" className="profile_email_input" />
          </div>
          <div className="profile_phone_editor">
            <label htmlFor="">phone: </label>
            <input type="numbers" className="profile_phone_input" />
          </div>
          <button className="done" onClick={updateProfile}>
            done
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
