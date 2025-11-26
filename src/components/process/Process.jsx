import React from "react";
import styles from "./Process.module.css";

const Process = () => {
	return (
		<div
			className={`w-full h-dvh flex flex-col justify-start items-start gap-12 bg-zinc-900 text-(--text-reverse-primary) ${styles.container}`}
		>
			<p className="text-2xl p-9">From one click to team-ready technology</p>

			<div className="w-full h-4/6 grid grid-cols-4 gap-6 p-6 bg-zinc-900 ">
				<div className="flex flex-col justify-start items-start gap-6 border-0 border-l border-l-zinc-700 p-3">
					<p className="p-3.5 bg-(--text-reverse-primary) w-max rounded-md text-(--text-primary)">
						1
					</p>
					<p className="text-xl">Choose & Customize</p>
					<p>
						Explore a variety of pod sizes, layouts, and finishes — and tailor
						every detail to fit your space, workflow, and style.
					</p>
				</div>
				<div className="flex flex-col justify-start items-start gap-6 border-0 border-l border-l-zinc-700 p-3">
					<p className="p-3.5 bg-(--text-reverse-primary) w-max rounded-md text-(--text-primary)">
						2
					</p>
					<p className="text-xl">Place Your Order</p>
					<p>
						Use our configurator to finalize your pod. Have questions along the
						way? Our team is always just a message away.
					</p>
				</div>
				<div className="flex flex-col justify-start items-start gap-6 border-0 border-l border-l-zinc-700 p-3">
					<p className="p-3.5 bg-(--text-reverse-primary) w-max rounded-md text-(--text-primary)">
						3
					</p>
					<p className="text-xl">Pod Enters Production</p>
					<p>
						Your pod is built to order with care and precision. Production time
						typically takes 3-4 weeks, depending on customization.
					</p>
				</div>
				<div className="flex flex-col justify-start items-start gap-6 border-0 border-l border-l-zinc-700 p-3">
					<p className="p-3.5 bg-(--text-reverse-primary) w-max rounded-md text-(--text-primary)">
						4
					</p>
					<p className="text-xl">Recieve and Install</p>
					<p>
						Your pod arrives ready to install, with a straightforward setup
						process and clear instructions.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Process;
