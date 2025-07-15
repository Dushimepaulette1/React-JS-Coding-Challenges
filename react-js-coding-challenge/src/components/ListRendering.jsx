export default function ListRendering(props) {
  // Given an array:
  // ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
  // Use the map function to render them in an unordered list:
  // Once you learn the concept of rendering declaratively, you'll see how much life
  // becomes easier (overstatement).
  // But think of it this way...
  // Our example list is not that big, but imagine if the list contains thousands of items, which is true
  // when working with real-life data and
  // real-world applications. You wouldn't want to manually code each <li> one thousand times, right?
  // And what if the data changes? This is the case when working with data in production environment.
  // You'll have to change the code again.
  // But not when you rendered the list declaratively. When the data changes, and you rendered your data
  // presentation declaratively, a.k.a. the smart way, then your declarative code does the change for you.

  return (
    <main>
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </main>
  );
}
