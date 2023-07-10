import { useState, useRef } from "react";

function Timer(props) {
  //   let timerId = 0;
  const [timer, setTimer] = useState(0);
  const [timerid, setTimerid] = useState(0);
  let ref1 = useRef("Kabir"); //{current:"Kabir"}
  let h2Ref = useRef(null);
  let startBtnRef = useRef(null);

  const startTimer = () => {
    h2Ref.current.style.color = "green";
    startBtnRef.current.disabled = true;
    ref1.current = setInterval(() => {
      setTimer((prevstate) => prevstate + 1);
    }, 1000);
  };

  const stopTimer = () => {
    h2Ref.current.style.color = "red";
    startBtnRef.current.disabled = false;
    clearInterval(ref1.current); //0   but it should 5
  };
  return (
    <div
      style={{
        width: "500px",
        margin: "100px auto",
        boxShadow: "0 0 10px black",
        textAlign: "center",
        padding: "50px",
      }}
    >
      <h2 ref={h2Ref}>Timer : {timer}</h2>
      <button ref={startBtnRef} onClick={startTimer}>
        Start
      </button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default Timer;
