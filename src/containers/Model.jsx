import Lambo from "../components/Lambo";
import Porsche from "../components/Porsche";
import { carState } from "../utilities/States";
import { useSnapshot } from "valtio";

function Model(props) {
  const { currentCar } = useSnapshot(carState);

  if (currentCar === 0)
    return <Lambo {...props} position={[0, 1.1, 0]} scale={0.015} />;
  else if (currentCar === 1)
    return <Porsche {...props} position={[0, 1.2, 0]} scale={2} />;
}

export default Model;
