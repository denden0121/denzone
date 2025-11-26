import React, { useEffect, useRef, forwardRef } from "react";
import styles from "./AnimationPrototype.module.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { DirectionalLight } from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
// const Cube = forwardRef(({ position, size, color, wireframe }, ref) => {
// 	return (
// 		<mesh ref={ref} position={position}>
// 			<boxGeometry args={size} />
// 			<meshPhysicalMaterial color={color} wireframe={wireframe} />
// 		</mesh>
// 	);
// });

const helloTextTl = () => {
	let tl = gsap.timeline();
	tl.fromTo("");
};

const AnimationPrototype = () => {
	// const cubeRef = useRef();
	// useGSAP(
	// 	() => {
	// 		let tl = gsap.timeline({
	// 			defaults: {
	// 				duration: 1,
	// 				ease: "power1.inOut",
	// 			},
	// 		});
	// 		tl.to(".green", { x: 300 });
	// 		tl.to(".green", { y: 97 });
	// 		tl.to(".green", { scale: 1.2 });
	// 		tl.to(".yellow", { x: 300 }, "-=1");
	// 		tl.to(".blue", { x: 300 }, "+=1");
	// 	},
	// 	{ scope: colorContainerRef }
	// );

	const helloTextRef = useRef(null);
	const colorContainerRef = useRef(null);
	const secondSectionRef = useRef(null);
	// const { contextSafe } = useGSAP({ scope: helloTextRef });

	// useGSAP(() => {
	// 	gsap.to(helloTextRef.current, {
	// 		rotate: "360deg",
	// 		scale: 2,
	// 		duration: 2,
	// 		repeat: -1,
	// 		yoyo: true,
	// 	});
	// });
	// const onClickGood = contextSafe(() => {
	// 	gsap.fromTo(
	// 		"#helloText",
	// 		// From these properties (rotation 0 degrees)
	// 		{ rotation: 0 },
	// 		// To these properties (rotation 180 degrees)
	// 		{ rotation: 180, duration: 1, ease: "power1.out" }
	// 	);
	// });

	// bouncing text
	// useGSAP(() => {
	// 	gsap.fromTo(
	// 		helloTextRef.current,
	// 		{ y: 0, opacity: 0, scale: 0.5 },
	// 		{ duration: 1, y: -100, opacity: 1, scale: 1, yoyoEase: true, repeat: -1 }
	// 	);
	// });

	// useGSAP(
	// 	() => {
	// 		gsap.to(".yellow", {
	// 			x: window.innerWidth,
	// 			rotation: 360,
	// 			scrollTrigger: {
	// 				trigger: ".green",
	// 				start: "top center", // when the top of the trigger hits the center of the viewport
	// 				end: "bottom top", // when the bottom of the trigger leaves the top of the viewport
	// 				scrub: true, // link animation progress to scroll (smooth scrubbing)
	// 			},
	// 		});
	// 		gsap.to(".green", {
	// 			x: "100px",
	// 			y: "20px",
	// 			rotate: 360,
	// 			scrollTrigger: {
	// 				trigger: ".green",
	// 				start: "top center", // when the top of the trigger hits the center of the viewport
	// 				end: "bottom top", // when the bottom of the trigger leaves the top of the viewport
	// 				scrub: true, // link animation progress to scroll (smooth scrubbing)
	// 			},
	// 		});
	// 		gsap.to(helloTextRef.current, {
	// 			color: "white",
	// 			scale: 2,
	// 			rotateX: 360,
	// 			scrollTrigger: {
	// 				trigger: ".second-section",
	// 				start: "top top", // when the top of the trigger hits the center of the viewport
	// 				end: "center top", // when the bottom of the trigger leaves the top of the viewport
	// 				scrub: true, // link animation progress to scroll (smooth scrubbing)
	// 			},
	// 		});
	// 		gsap.to(helloTextRef.current, {
	// 			color: "white",
	// 			duration: 0,
	// 			scrollTrigger: {
	// 				trigger: ".second-section",
	// 				scrub: true, // link animation progress to scroll (smooth scrubbing)
	// 			},
	// 		});
	// 	},
	// 	{ scope: secondSectionRef }
	// );

	return (
		<div className={`w-full h-max ${styles.container}`}>
			<div className="w-full h-dvh relative bg-zinc-50 flex flex-col justify-center items-center gap-9 text-white text-8xl">
				{/* <div ref={helloTextRef}>
					<p id="helloText" className="block text-3xl text-black">
						Hello
					</p>
					<button
						onClick={onClickGood}
						className="text-white text-sm border border-zinc-900 bg-zinc-950"
					>
						Click me
					</button>
				</div> */}
				<p className="header block text-7xl text-black text-center">
					Positioning animations in a timeline
				</p>
				<p
					id="helloText"
					className="subheader block text-xl font-extralight text-black"
				>
					finally tween the rotation of all elements with the class "myClass" to
					45 and stagger
				</p>
				{/* <Canvas>
					<directionalLight position={[1, 1, 1]} />
					<ambientLight intensity={1} />
					<Cube
						ref={cubeRef}
						position={[-2, 1, 1]}
						size={[1, 1, 1]}
						color={"green"}
						wireframe={false}
					/>
				</Canvas> */}
			</div>
			<div
				ref={secondSectionRef}
				className="second-section w-full h-dvh bg-zinc-700 flex flex-col justify-center items-center text-white text-8xl "
			>
				<div
					ref={colorContainerRef}
					className="w-full h-max border border-zinc-600 flex flex-col justify-start items-start gap-4 py-4"
				>
					<div className="green bg-green-500 w-20 h-20 rounded-3xl"></div>
					<div className="yellow bg-yellow-500 w-20 h-20 rounded-3xl"></div>
					<div className="blue bg-blue-500 w-20 h-20 rounded-3xl"></div>
				</div>
			</div>
			<div className="w-full h-dvh bg-zinc-50 flex flex-col justify-center items-center text-white text-8xl "></div>
		</div>
	);
};

export default AnimationPrototype;
