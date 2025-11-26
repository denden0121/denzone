import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Model from "@/components/hero_model/HeroModel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
	const robotRef = useRef();
	const triggerRef = useRef();

	useEffect(() => {
		// Wait until model is ready
		if (!robotRef.current || !robotRef.current.model) return;

		const rotation = robotRef.current.model.rotation;

		// Create animation
		gsap.to(rotation, {
			y: 3,
			ease: "none",
			scrollTrigger: {
				trigger: triggerRef.current, // FIXED
				start: "top bottom",
				end: "bottom top",
				scrub: true,
			},
		});
	}, []); // FIX: run once after mount

	return (
		<div className="h-[200dvh] relative border border-zinc-900 flex flex-col items-center py-12">
			<h1 className="text-(--text-primary) text-7xl font-bold z-10">
				MEET YOUR NEW MACHINE
			</h1>
			<h4 className="text-(--text-primary) text-2xl font-light z-10">
				Robots engineered to think, move, and work like nothing before.
			</h4>

			{/* 3D SECTION */}
			<div className="h-[50dvh] fixed w-full z-100">
				<Canvas camera={{ position: [2, 2, 10] }}>
					<ambientLight intensity={0.6} color={"blue"} />
					<directionalLight color={"blue"} position={[5, 5, 5]} intensity={1} />
					<Model ref={robotRef} position={[0, -1, 1]} scale={1} />

					<OrbitControls enableZoom={true} enableRotate={true} />
					<Environment preset="studio" />
				</Canvas>
			</div>

			{/* SCROLL TRIGGER AREA */}
			<div className="bg-zinc-900 w-full absolute bottom-0 h-dvh flex items-center justify-center">
				<p ref={triggerRef} className="text-white text-4xl">
					Scroll to rotate robot
				</p>
			</div>
		</div>
	);
};

export default Hero;
