import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div class="container mx-auto">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
