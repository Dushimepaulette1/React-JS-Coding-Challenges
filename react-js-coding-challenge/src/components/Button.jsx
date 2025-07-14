export default function UserClicks(props) {
  // Exercise 2: Capturing User Clicks
  // What makes a web app different from a static website? A web app is interactive.
  // Of course, there's more to web apps than capturing clicks, but it's important to
  //  start from the basics.
  // This exercise gets you started with event handling,
  // which is a basic concept not only in React but also in JavaScript (which is again
  // another pre-requisite before learning React).
  // Using the native HTML <button> tag, capture the click event and alert the message, "Clicked!".
  // Take note that capturing events such as clicks is done differently in React than it is in JavaScript.

  // In the previous exercise, we used the HTML <button> tag. But much of the power that React provides
  // to us developers is being able to create our own components and reuse them.
  // You'll be creating more complicated custom components than a simple button
  // in the near future, but we all gotta start somewhere.
  // In this exercise, build your own Button component and render it three times.
  // On user click, it should alert which button was clicked:
  // The custom component should accept an onClick prop. On render, it should
  // render the children betwen the button. This is the text you want for the button.
  // Think of it like the HTML <button> tag. Whatever text you place between the opening and closing tag is
  // rendered between the button when you inspect the element in your browser developer console.
  // On user click, it should alert which button was clicked.
  return (
    <>
      <h3>Button was Clicked: {props.count} </h3>
      <button onClick={props.OnClick} className="clickMe">
        {props.children}
      </button>
    </>
  );
}
