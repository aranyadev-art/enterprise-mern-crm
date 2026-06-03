import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useParams } from "react-router-dom";
import "../styles/resetPassword.css";

function ResetPassword() {
  const { token } = useParams();

const [password, setPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `http://localhost:5000/api/users/reset-password/${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      }
    );

    const data = await response.json();

    alert(data.message);
  };

  return (
    <div className="reset-container">
      <div className="reset-card">

        <div className="reset-logo">
          Enterprise CRM
        </div>

        <h2>Reset Password 🔐</h2>

        <p>
          Enter your new password below.
        </p>

        <form onSubmit={submitHandler}>

      <div className="password-wrapper">

  <input
    type={showPassword ? "text" : "password"}
    placeholder="Enter New Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />

  <button
    type="button"
    className="eye-btn"
    onClick={() =>
      setShowPassword(!showPassword)
    }
  >
    {showPassword ? (
      <EyeOff size={20} />
    ) : (
      <Eye size={20} />
    )}
  </button>

</div>

         <button
  type="submit"
  className="reset-btn"
>
  Reset Password
</button>

        </form>

      </div>
    </div>
  );
}

export default ResetPassword;