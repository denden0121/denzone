import "./App.css";
import Home from "@/pages/Home";
import ModelObject from "@/pages/model_object/ModelObject";
import AnimationPrototype from "@/pages/animation_prototype/AnimationPrototype";
import HeroPrototype from "@/pages/hero_prototype/HeroPrototype";

const App = () => {
	return (
		<div className="app-container bg-(--bg-primary)">
			{/* <Home /> */}
			{/* <ModelObject /> */}
			{/* <AnimationPrototype /> */}
			<HeroPrototype />
		</div>
	);
};

export default App;
