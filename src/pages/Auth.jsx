import "../css/auth.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Save credentials to localStorage
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;

    if (username && password) {
      localStorage.setItem("boots_username", username);
      localStorage.setItem("boots_password", password); // NOTE: This is NOT secure for real apps
      alert("Signup successful! Credentials stored locally.");
    } else {
      alert("Please enter valid details.");
    }
  };

  const handLogin = (e) => {
    e.preventDefault();

    const storedUserName = localStorage.getItem("boots_username");
    const storedPassword = localStorage.getItem("boots_password");

    if (
      formData.username === storedUserName &&
      formData.password === storedPassword
    ) {
      localStorage.setItem("boots_loggedin", true);
      navigate("/home");
    }
  };

  return (
    <div className="auth">
      <div className="signup login">
        <form action="" id="signup_form" onSubmit={handleSubmit}>
          <h1>Signup</h1>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={handleChange}
          />
          <button type="submit">Signup</button>
        </form>
      </div>

      <div className="divider"></div>

      <div className="login">
        <form action="" id="login_form" onSubmit={handLogin}>
          <h1>Login</h1>
          <label htmlFor="#username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            required
          />
          <label htmlFor="#password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            required
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
