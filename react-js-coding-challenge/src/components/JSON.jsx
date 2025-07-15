import { Joke } from "./Joke";

export default function RenderJSON(props) {
  let objItems = props.jsonObj.map((item, index) => (
    <Joke key={item.id} setup={item.setup} punchline={item.punchline}></Joke>
  ));
  return <main>{objItems}</main>;
}
