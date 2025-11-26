import React from "react";
import styles from "./Features.module.css";

const Features = () => {
	return (
		<div className={`w-full h-max bg-zinc-950 ${styles.container}`}>
			<div className="w-full h-dvh   flex flex-row justify-center items-center">
				<div className="  w-2/6 h-full"></div>
				<div className="  w-2/6 h-full"></div>
				<div className=" w-2/6 h-full flex flex-col justify-center items-start">
					<div className=" border-zinc-800 py-4 text-(--text-reverse-primary) w-2/3 flex flex-col justify-start items-start gap-7">
						<p className="text-xl">1 ━ 3</p>

						<p className="text-7xl font-bold">PRECISION VISION SYSTEM</p>

						<p className="text-3xl font-semibold">
							ROBOTS ENGINEERED FOR EXTREME ACCURACY
						</p>

						<p className="text-2xl font-medium">
							High-resolution optical sensors allow the robot to detect objects,
							map environments, and react in real time with near-human
							precision.
						</p>
					</div>
				</div>
			</div>
			<div className="w-full h-dvh   flex flex-row-reverse justify-center items-center">
				<div className="  w-2/6 h-full"></div>
				<div className="  w-2/6 h-full"></div>
				<div className=" w-2/6 h-full flex flex-col justify-center items-end">
					<div className=" border-zinc-800 py-4 text-(--text-reverse-primary) w-2/3 flex flex-col justify-start items-start gap-7">
						<p className="text-xl">2 ━ 3</p>

						<p className="text-7xl font-bold">ADAPTIVE MOTION CONTROL</p>

						<p className="text-3xl font-semibold">
							DYNAMIC MOVEMENT FOR ANY ENVIRONMENT
						</p>

						<p className="text-2xl font-medium">
							Advanced balance algorithms and fluid actuation systems allow the
							robot to move naturally across uneven terrain and react safely to
							unexpected obstacles.
						</p>
					</div>
				</div>
			</div>
			<div className="w-full h-dvh   flex flex-row justify-center items-center">
				<div className="  w-2/6 h-full"></div>
				<div className="  w-2/6 h-full"></div>
				<div className=" w-2/6 h-full flex flex-col justify-center items-start">
					<div className=" border-zinc-800 py-4 text-(--text-reverse-primary) w-2/3 flex flex-col justify-start items-start gap-7">
						<p className="text-xl">3 ━ 3</p>

						<p className="text-7xl font-bold">AUTONOMOUS TASK INTELLIGENCE</p>

						<p className="text-3xl font-semibold">
							AI THAT LEARNS AND ADAPTS ON THE JOB
						</p>

						<p className="text-2xl font-medium">
							A powerful onboard AI engine learns from interactions, enabling
							the robot to plan, prioritize, and complete complex tasks with
							minimal supervision.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
