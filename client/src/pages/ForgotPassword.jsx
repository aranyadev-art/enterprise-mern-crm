import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/forgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "http://localhost:5000/api/users/forgot-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    const data = await response.json();

    alert(data.message);
  };

  return (
    <div className="forgot-container">
      <div className="forgot-card">

        <div className="forgot-logo">
          Enterprise CRM
        </div>

        <h2>Forgot Password 🔑</h2>

        <p>
          Enter your registered email address to
          generate a password reset link.
        </p>

        <form onSubmit={submitHandler}>

          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <button type="submit">
            Send Reset Link
          </button>

        </form>

        <div className="back-login">
          <Link to="/login">
            ← Back to Login
          </Link>
        </div>

      </div>
    </div>
  );
}

export default ForgotPassword;