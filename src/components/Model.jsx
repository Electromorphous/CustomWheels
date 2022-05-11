import Lambo from "./Lambo";
import Porsche from "./Porsche";

function Model(props) {
  // return <Lambo {...props} scale={0.001} />;
  return <Porsche {...props} scale={0.1} />;
}

export default Model;
