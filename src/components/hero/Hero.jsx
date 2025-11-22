import React from "react";
import Navigation from "@/components/navigation/Navigation";

const Hero = () => {
	return (
		<div className="bg-(--bg-color) w-full h-dvh w-dvw">
			<Navigation />
			<p className="text-(--text-primary)">Hero</p>
		</div>
	);
};

export default Hero;
