import React from "react";
import { motion } from "framer-motion";

const Overlay = () => {
	return (
		<motion.div
			initial={{ x: "120%" }}
			animate={{ x: ["0%", "-100%"] }}
			transition={{ delay: 1, times: [0.5, 1] }}
			className="overlay h-screen fixed bg-gray-800 top-0 left-0 z-10"
		></motion.div>
	);
};

export default Overlay;
