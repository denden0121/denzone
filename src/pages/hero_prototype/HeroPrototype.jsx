import React, { useRef } from "react";
import Navigation from "@/components/navigation/Navigation";
import styles from "./HeroPrototype.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const HeroPrototype = () => {
	const heroSectionRef = useRef();
	const headerRef = useRef();
	const subHeaderRef = useRef();

	const headerTl = () => {
		const tl = gsap.timeline();
		tl.fromTo(
			headerRef.current,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 1,
				ease: "power1.in",
			}
		);
		tl.fromTo(
			headerRef.current,
			{
				y: 0,
			},
			{
				y: "-500px",
				duration: 2,
				ease: "sine.out",
			}
		);
		return tl;
	};

	const subHeaderTl = () => {
		const tl = gsap.timeline();

		tl.fromTo(
			subHeaderRef.current,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 1,
				ease: "power1.in",
			}
		);
		tl.fromTo(
			subHeaderRef.current,
			{
				scale: 0,
			},
			{
				scale: 2,
				duration: 1,
				ease: "power1.in",
			}
		);

		return tl;
	};

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: heroSectionRef.current,
					start: "center center",
					end: "center top",
					markers: true,
					scrub: 1,
					pin: false,
				},
			});

			tl.add(headerTl()).add(subHeaderTl());
		},
		{
			scope: heroSectionRef,
		}
	);

	return (
		<div className={`w-full h-max ${styles.container}`}>
			<div
				ref={heroSectionRef}
				className="w-full h-dvh  relative bg-zinc-50 flex flex-col justify-center items-center gap-9 text-white text-8xl"
			>
				<h1
					ref={headerRef}
					className="header  text-(--text-primary) text-8xl text-center font-bold z-10"
				>
					MEET YOUR NEW MACHINE
				</h1>
				<h4
					ref={subHeaderRef}
					className="subheader  text-(--text-primary) text-2xl text-center font-light z-10"
				>
					Robots engineered to think, move, and work like nothing before.
				</h4>
			</div>
			<div className="second-section w-full h-dvh bg-zinc-700 flex flex-col justify-center items-center text-white text-8xl "></div>
			<div className="w-full h-dvh bg-zinc-50 flex flex-col justify-center items-center text-white text-8xl "></div>
		</div>
	);
};

export default HeroPrototype;
