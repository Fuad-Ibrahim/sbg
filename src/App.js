import "./App.css";
import Login from "./Login";
import Home from "./Home";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("");

  return (
    <>
      <button onClick={() => setDisplay("Home")}>Home</button>
      <button onClick={() => setDisplay("Login")}>Login</button>
      {display === "Home" && <Home />}
      {display === "Login" && <Login />}
    </>
  );
}

export default App;
