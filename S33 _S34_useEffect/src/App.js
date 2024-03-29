import "./App.css";
import { useState } from "react";
// import Parent from "./Components/Parent-child/Parent";

import Image from "./Components/Lifecyle/Image";
import Text from "./Components/Lifecyle/Text";

function App() {
  const [showImage, setShowImage] = useState(true);
  return (
    <div className="App">
      {showImage ? <Image /> : <Text />}
      <br />
      <br />
      <button
        onClick={() => {
          setShowImage(true);
        }}
      >
        Show Image
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          setShowImage(false);
        }}
      >
        Show Text
      </button>
    </div>
  );
}

export default App;
