import { ContactShadows, OrbitControls, Environment } from "@react-three/drei";
import Model from "./Model";
import Stage from "../components/Stage";
import { envState } from "../utilities/States";
import { useSnapshot } from "valtio";

function Three() {
  const { currentEnv } = useSnapshot(envState);

  //   const ref = useRef(null);

  //   useEffect(() => {
  //     if (!!ref.current) {
  //       console.log(ref.current);
  //     }
  //   }, [ref.current]);

  // useEffect(() => {}, [currentEnv]);

  return (
    <>
      <color attach="background" args={["#000"]} />
      {currentEnv === "stage" ? (
        <Stage />
      ) : (
        <>
          <Environment
            preset={currentEnv}
            ground={{ height: 5, radius: 40, scale: 20 }}
          />
          <ContactShadows resolution={1024} blur={0.4} opacity={0.7} />
        </>
      )}

      <OrbitControls
        target={[0, 0.05, 0]}
        minPolarAngle={Math.PI / 8}
        maxPolarAngle={Math.PI / 2.2}
        maxDistance={20}
        minDistance={7}
        enablePan={false}
        rotateSpeed={0.69}
      />
      <Model castShadow receiveShadow />
    </>
  );
}

export default Three;
