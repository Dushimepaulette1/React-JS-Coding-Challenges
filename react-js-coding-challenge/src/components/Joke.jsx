export function Joke(props) {
  return (
    <div>
      <h2>{props.setup}</h2>
      <h4>{props.punchline}</h4>
    </div>
  );
}
