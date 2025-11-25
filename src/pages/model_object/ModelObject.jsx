import React, { useEffect, useRef, useState } from "react";
import styles from "./ModelObject.module.css";
import { Canvas, events, useFrame } from "@react-three/fiber";

const Cube = ({ position, size, color }) => {
	const cubeRef = useRef(null);

	useFrame((state, delta) => {
		cubeRef.current.rotation.x += delta;
		cubeRef.current.rotation.y += delta * 2;
		cubeRef.current.position.z = Math.sin(state.clock.elapsedTime) * 1;
		console.log(state);
	});

	return (
		<mesh ref={cubeRef} position={position}>
			<boxGeometry args={size} />
			<meshStandardMaterial color={color} />
		</mesh>
	);
};

const Sphere = ({ position, size, color }) => {
	const cubeRef = useRef(null);

	useFrame((state, delta) => {
		cubeRef.current.rotation.x += delta;
		cubeRef.current.rotation.y += delta * 2;
		cubeRef.current.position.z = Math.sin(state.clock.elapsedTime) * 1;
		console.log(state);
	});
	return (
		<mesh ref={cubeRef} position={position}>
			<sphereGeometry />
			<meshStandardMaterial color={color} wireframe={true} />
		</mesh>
	);
};
const Torus = ({ position, size, color }) => {
	const [isHovered, setIsHovered] = useState(false);
	const cubeRef = useRef(null);

	useFrame((state, delta) => {
		cubeRef.current.rotation.x += delta;
		cubeRef.current.rotation.y += delta * 2;
	});
	return (
		<mesh
			onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
			onPointerLeave={(event) => (event.stopPropagation(), setIsHovered(false))}
			ref={cubeRef}
			position={position}
		>
			<torusGeometry />
			<meshStandardMaterial
				color={isHovered ? color : "black"}
				wireframe={true}
			/>
		</mesh>
	);
};

const ModelObject = () => {
	return (
		<div className="h-dvh relative border-zinc-900 flex flex-col justify-start items-center py-12 gap-8">
			<h1 className="text-(--text-secondary) text-8xl text-center z-10">3D</h1>
			<div className={styles.canvasContainer}>
				<Canvas>
					<directionalLight position={[1, 1, 1]} />
					<ambientLight intensity={0.4} />
					{/* 
					<Cube position={[2, -1, 1]} color={"blue"} size={[1, 1, 1]} />
					<Cube position={[-2, 1, 1]} color={"orange"} size={[1, 1, 1]} />
					<Cube position={[-2, -1, -1]} color={"yellow"} size={[1, 1, 1]} />
					<Cube position={[1, 1, 2]} color={"#47d4ec"} size={[1, 1, 1]} /> */}

					<Sphere color={"#47d4ec"} position={[2, -1, -3]} />
					<Torus color={"yellow"} position={[-2, 1, -3]} />
				</Canvas>
			</div>
		</div>
	);
};

export default ModelObject;
