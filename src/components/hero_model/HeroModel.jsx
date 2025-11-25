import { useGLTF } from "@react-three/drei";

export function Model(props) {
	const { scene } = useGLTF("../public/models/robot_cln-r_school_project.glb");
	// const { scene } = useGLTF("../public/models/cyborg_model_001.glb");
	return <primitive object={scene} {...props} />;
}
