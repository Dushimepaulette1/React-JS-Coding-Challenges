import UserClicks from "./components/Button";
import ListRendering from "./components/ListRendering";
import React from "react";

export default function App() {
  let [count, setCount] = React.useState(0);
  function handleClick(buttons) {
    setCount((prevCount) => prevCount + 1);
  }

  let array = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  return (
    <>
      <div className="box">
        <h1>Hello World</h1>
      </div>
      <UserClicks OnClick={() => handleClick("Button 1")} count={count}>
        Button 1
      </UserClicks>
      <UserClicks OnClick={() => handleClick("Button 2")}> Button 2</UserClicks>
      <UserClicks OnClick={() => handleClick("Button 3")}> Button 3</UserClicks>
      <ListRendering items={array} />
    </>
  );
}
