import styles from "./Navigation.module.css";
import {
	IconShoppingCartShare,
	IconShoppingBag,
	IconHome,
	IconInfoCircle,
	IconHammer,
	IconPhone,
} from "@tabler/icons-react";
import Logo from "@/components/logo/Logo";

const Navigation = () => {
	return (
		<div className="w-full flex flex-row justify-end items-center gap-2.5 p-6">
			<Logo />
			{/* primary nav */}
			<div
				className={`w-max bg-(--bg-primary)  border-(--bg-secondary)  flex flex-row justify-center align-center gap-3.5 p-2 overflow-hidden rounded-4xl ${styles.navigationMainContainer}`}
			>
				<p>
					HOME
					<IconHome stroke={1} />
				</p>
				<p>
					ABOUT US
					<IconInfoCircle stroke={1} />
				</p>
				<p>
					PRODUCT BUILDER
					<IconHammer stroke={1} />
				</p>
				<p>
					CONTACT
					<IconPhone stroke={1} />
				</p>
			</div>

			{/* secondary nav section */}
			<div
				className={`w-max bg-(--brand-color) border border-(--bg-secondary)  flex flex-row justify-center items-center p-2 overflow-hidden rounded-4xl ${styles.navigationSecondaryContainer}`}
			>
				<p>SHOP NOW</p>
				<span className={styles.shopBtn}>
					<IconShoppingCartShare stroke={1} />
				</span>
			</div>
			<div
				className={`w-max bg-(--brand-color) border border-(--bg-secondary)  flex flex-row justify-center items-center gap-2 px-2 overflow-hidden rounded-full ${styles.navigationSecondaryContainer}`}
			>
				<span className={styles.cartBtn}>
					<IconShoppingBag stroke={1} />
				</span>
			</div>
		</div>
	);
};

export default Navigation;
