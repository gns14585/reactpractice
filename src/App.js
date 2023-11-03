import React from "react";

function App(props) {
  const num1 = Math.ceil(Math.random() * 6);
  const num2 = Math.ceil(Math.random() * 6);

  let messageClassName = "lose";
  let message = "다시 던져보세요";

  if (num1 === num2) {
    messageClassName = "win";
    message = "당첨";
  }

  return (
    <div>
      <h1>1번 주사위 {num1}</h1>
      <h1>2번 주사위 {num2}</h1>

      <h1 className={messageClassName}>{message}</h1>
    </div>
  );
}

export default App;
