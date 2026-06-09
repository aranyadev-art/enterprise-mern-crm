import { useEffect } from "react";
import './App.css';

function App() {

  useEffect(() => {

    fetch("http://localhost:5000")
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
      });

  }, []);

  return (
    <div>
      <h1>E-Commerce App</h1>
    </div>
  );
}

export default App;