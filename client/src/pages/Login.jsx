import { useState } from "react";
import "../styles/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      localStorage.setItem("token", data.token);

      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <div className="login-left">
         <div className="crm-logo">
               Enterprise CRM
             </div>
             
             <h2>Welcome Back 👋</h2>
             
             <p>
               Sign in to continue to your CRM dashboard.
             </p>

          <form onSubmit={submitHandler}>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <button type="submit">
              Login
            </button>
          </form>
        </div>

        <div className="login-right">
         <div className="overlay">

              <h2>
                Manage Your Business
                <br />
                All In One Place
              </h2>
            
              <p>
             Leads, Clients, Quotations, Orders,
             Factory and Accounts.
           </p>
         
           <div className="features">
             <div>✓ Lead Management</div>
             <div>✓ Client Tracking</div>
             <div>✓ Factory Workflow</div>
             <div>✓ Real-time Dashboard</div>
           </div>
         
         </div>
        </div>

      </div>

    </div>
  );
}

export default Login;