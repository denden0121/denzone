import "./App.css";
import Home from "@/pages/Home";
import ModelObject from "@/pages/model_object/ModelObject";
import AnimationPrototype from "@/pages/animation_prototype/AnimationPrototype";
import HeroPrototype from "@/pages/hero_prototype/HeroPrototype";
import Features from "./components/features/Features";
import Process from "./components/process/Process";

const App = () => {
	return (
		<div className="app-container bg-(--bg-primary)">
			<Home />
			{/* <ModelObject /> */}
			{/* <AnimationPrototype /> */}
			{/* <HeroPrototype /> */}
			{/* <Features /> */}
			{/* <Process /> */}
		</div>
	);
};

export default App;
