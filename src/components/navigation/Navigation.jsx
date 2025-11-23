import styles from "./Navigation.module.css";
import gsap from "gsap";
import { useRef } from "react";
import { IconShoppingCartFilled } from "@tabler/icons-react";

const Navigation = () => {
	const shopBtnRef = useRef(null);

	const shopBtnClick = () => {};

	return (
		<div className="w-full flex flex-row justify-around items-center py-28">
			<div
				className={`w-max bg-(--bg-secondary) flex flex-row justify-center align-center gap-3.5 p-2 overflow-hidden rounded-4xl ${styles.navigationMainContainer}`}
			>
				<p>HOME</p>
				<p>ABOUT US</p>
				<p>PRODUCT BUILDER</p>
				<p>CONTACT</p>
			</div>
			<div
				className={`w-max bg-(--bg-secondary) flex flex-row justify-center align-center gap-2 p-2 overflow-hidden rounded-4xl ${styles.navigationSecondaryContainer}`}
			>
				<p>SHOP NOW</p>
				<span
					ref={shopBtnRef}
					onMouseEnter={shopBtnClick}
					className={styles.shopBtn}
				>
					<IconShoppingCartFilled />
				</span>
			</div>
		</div>
	);
};

export default Navigation;
