import UserClicks from "./components/Button";
import ListRendering from "./components/ListRendering";
import { Form } from "./components/Forms";
import RenderJSON from "./components/JSON";
import { Joke } from "./components/Joke";
import React from "react";

export default function App() {
  let [count, setCount] = React.useState(0);
  function handleClick(buttons) {
    setCount((prevCount) => prevCount + 1);
  }

  let array = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  let jsonObj = [
    {
      id: 1,
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit",
    },
    {
      id: 2,
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#",
    },
  ];

  return (
    <>
      <div className="box">
        <h1>Hello World</h1>
      </div>
      {/* <UserClicks OnClick={() => handleClick("Button 1")} count={count}>
        Button 1
      </UserClicks>
      <UserClicks OnClick={() => handleClick("Button 2")}> Button 2</UserClicks>
      <UserClicks OnClick={() => handleClick("Button 3")}>Button 3</UserClicks>
      <ListRendering items={array} />
      <Form /> */}
      <RenderJSON jsonObj={jsonObj} />
    </>
  );
}
