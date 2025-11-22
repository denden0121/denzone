import React from "react";
import Logo from "@/components/logo/Logo";

const Navigation = () => {
	return (
		<div>
			<Logo />

			<div>
				<p className="text-(--text-primary)">Our Offers</p>
				<p className="text-(--text-primary)">Pricing</p>
				<p className="text-(--text-primary)">About</p>
			</div>
		</div>
	);
};

export default Navigation;
