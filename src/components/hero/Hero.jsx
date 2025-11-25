import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Model } from "@/components/hero_model/HeroModel";

const Hero = () => {
	return (
		<div className="h-[80dvh] relative  border-zinc-900 flex flex-col justify-start items-center py-12 gap-8">
			<h1 className="text-(--text-primary) text-7xl font-extrabold text-center z-10">
				MEET YOUR NEW MACHINE
			</h1>
			<h4 className="text-(--text-primary) text-2xl font-medium text-center z-10">
				Robots engineered to think, move, and work like nothing before.
			</h4>

			<div className=" h-dvh absolute w-full z-0 cursor-crosshair">
				<Canvas camera={{ position: [1, 1, 1] }}>
					<ambientLight intensity={0.6} />
					<directionalLight position={[5, 5, 5]} intensity={1} />

					<Model scale={1} />

					<OrbitControls enableZoom={true} />
					<Environment preset="studio" />
				</Canvas>
			</div>
		</div>
	);
};

export default Hero;
