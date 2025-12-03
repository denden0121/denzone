import { forwardRef, useImperativeHandle, useRef } from "react";
import { useGLTF } from "@react-three/drei";

const HeroModel = forwardRef(({ position, scale }, ref) => {
	const modelRef = useRef();
	const { scene } = useGLTF("/models/motor_helmet.glb");
	// const { scene } = useGLTF("/models/2018_lotus_evora_gt430.glb");
	// const { scene } = useGLTF("/models/suzuki_gsx_750_bike_3d_model.glb");

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
