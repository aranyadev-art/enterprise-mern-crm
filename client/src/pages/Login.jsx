import { useState } from "react";

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

      localStorage.setItem(
        "token",
        data.token
      );

      alert("Login Successful");

      window.location.href = "/";

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div style={styles.container}>

      <form
        onSubmit={submitHandler}
        style={styles.form}
      >

        <h2>CRM Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={styles.input}
        />

        <button style={styles.button}>
          Login
        </button>

      </form>

    </div>

  );

}

const styles = {

  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f1f5f9",
  },

  form: {
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  input: {
    padding: "10px",
  },

  button: {
    padding: "10px",
    background: "#1e293b",
    color: "white",
    border: "none",
    cursor: "pointer",
  },

};

export default Login;