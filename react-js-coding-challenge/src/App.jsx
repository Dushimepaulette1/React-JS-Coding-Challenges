import UserClicks from "./components/Button";
export default function App() {
  //Exercise 1: Hello World!
  // Every programming language starter tutorial teaches you how to output
  // "Hello, World!" using the language.
  // But this exercise is not just for tradition.
  // This will asses if you actually know HTML, which is one of the many prerequisites
  //  before learning React. Start by rendering a square with a background color.
  // Inside the square, render "Hello, World!".
  function handleClick(buttons) {
    alert(`${buttons} clicked`);
  }

  return (
    <>
      <div className="box">
        <h1>Hello World</h1>
      </div>
      <UserClicks OnClick={() => handleClick("Button 1")}> Button 1</UserClicks>
      <UserClicks OnClick={() => handleClick("Button 2")}> Button 2</UserClicks>
      <UserClicks OnClick={() => handleClick("Button 3")}> Button 3</UserClicks>
    </>
  );
}
