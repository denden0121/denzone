import React from "react";
import Hero from "@/components/hero/Hero";
import Navigation from "@/components/navigation/Navigation";

const Home = () => {
	return (
		<div className="w-full h-dvh bg-(--bg-primary)">
			<Navigation />
			<Hero />
		</div>
	);
};

export default Home;
