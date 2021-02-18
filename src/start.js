import React, { useState } from "react";
import { HeadCounter } from "./Components/Counter";
import { FabButton } from "./Components/FabButton";
import Navbar from "./Components/Navbar";
import { likesCounter } from "./Services/expensiveCalculation";

function App() {
  const [totalLikes, setTotalLikes] = useState(0);
  const [dark, setDark] = useState(false);

  const likes = likesCounter(totalLikes);

  const theme = {
    color: dark ? "#fff" : "#333",
    navbar: dark ? "#1a202c" : "#e5e7eb",
    backgroundColor: dark ? "#333" : "#fff",
  };

  const toogleDarkmode = () => setDark(!dark);

  return (
    <div style={theme} className="App">
      <Navbar theme={theme.navbar} toogleDarkmode={toogleDarkmode} />
      <HeadCounter likes={likes} />
      <FabButton totalLikes={totalLikes} setTotalLikes={setTotalLikes} />
    </div>
  );
}

export default App;
