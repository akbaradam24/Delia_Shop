import { useState } from "react";

import Navbar from "./Components/navbar";
import Home from "./Components/Home";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Home />
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
