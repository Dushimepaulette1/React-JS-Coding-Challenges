import { useState } from "react";
export function Form() {
  /**Build a form that accepts a first name and a last name. And instead of a boring "Submit" button, 
   * make a button that says "Greet Me" that when clicked,
   *  will alert "Hello [first name] [last name]!".
Here you will use a combination of concepts from previous exercises, such as using state,
 and event listening both on text input and button click.

But there is one specific concept we didn't tackle yet: */
  let [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });
  function handleChange(event) {
    let { name, value } = event.target;
    // This is like saying let name = event.target.name and let target = event.target.value
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Hello ${formData.firstName} ${formData.lastName}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <button className="clickMe">Greet Me</button>
    </form>
  );
}
