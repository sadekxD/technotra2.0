import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const dictionary = "0123456789qwertyuiopasdfghjklzxcvbnm!?></a`~+*=@#$%".split(
	""
);

const Decryption = () => {
	const textRef = useRef(null);
	const [text, setText] = useState("");

	const ran = () => {
		return Math.floor(Math.random() * dictionary.length);
	};

	// const ranString = () => {
	// 	let string = "";
	// 	for (let i = 0; i < amt; i++) {
	// 		string += dictionary[ran()];
	// 	}
	// 	return string;
	// };

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="h-screen fixed top-0 left-0 bottom-0 right-0 bg-gray-900 center"
		>
			<h1 ref={textRef} className="font-bold text-4xl text-white">
				Sadek irfan
			</h1>
		</motion.div>
	);
};

export default Decryption;
