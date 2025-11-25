import { forwardRef, useImperativeHandle, useRef } from "react";
import { useGLTF } from "@react-three/drei";

const HeroModel = forwardRef(({ position, scale }, ref) => {
	const modelRef = useRef();
	const { scene } = useGLTF("/models/robot_cln-r_school_project.glb");

	// Expose API to parent
	useImperativeHandle(ref, () => ({
		model: modelRef.current, // correct name for parent usage
		rotate: (x, y, z) => {
			modelRef.current.rotation.set(x, y, z);
		},
	}));

	return (
		<primitive
			ref={modelRef}
			object={scene}
			position={position}
			scale={scale}
		/>
	);
});

export default HeroModel;
