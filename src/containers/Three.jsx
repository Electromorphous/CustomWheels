import { OrbitControls } from "@react-three/drei";
import Model from "../components/Model";
import Environment1 from "./Environment1";

function Three() {
  //   const ref = useRef(null);

  //   useEffect(() => {
  //     if (!!ref.current) {
  //       console.log(ref.current);
  //     }
  //   }, [ref.current]);

  return (
    <>
      <color attach="background" args={["#000"]} />
      {/* <fog attach="fog" args={["#000", 1, 5]} /> */}

      <Environment1 />

      <OrbitControls
        target={[0, 0.05, 0]}
        minPolarAngle={Math.PI / 8}
        maxPolarAngle={Math.PI / 2.2}
        maxDistance={1}
        minDistance={0.45}
        enablePan={false}
        rotateSpeed={0.69}
      />

      {/* <ambientLight intensity={0.2} /> */}

      {/* top spot light */}
      <spotLight
        args={["#fff", 0.8, 0, Math.PI / 8, 0.25]}
        position={[0, 1, 0]}
        castShadow
      />
      {/* side lights */}
      <spotLight
        args={["#fff", 0.2, 0, Math.PI / 8, 0.4]}
        position={[5, 0, 0]}
        castShadow
      />
      <spotLight
        args={["#fff", 0.2, 0, Math.PI / 8, 0.4]}
        position={[-5, 0, 0]}
        castShadow
      />
      {/* back lights */}
      <spotLight
        args={["#fff", 0.2, 0, Math.PI / 8, 0.4]}
        position={[0, 0, -5]}
        castShadow
      />

      <Model position={[0, 0.08, 0]} castShadow receiveShadow />

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.001, 0]}
        castShadow
        receiveShadow
      >
        <planeGeometry args={[500, 500]} />
        <meshStandardMaterial roughness={1} color="#333" />
      </mesh>
    </>
  );
}

export default Three;
