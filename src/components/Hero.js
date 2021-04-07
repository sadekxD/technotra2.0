import React from "react";
import video from "../media/video.mp4";
import HeroCards from "./cards/HeroCards";

const Hero = () => {
	return (
		<div id="hero" className="bg-gray-900">
			{/* <video
				className="absolute top-0 left-0 h-full w-screen object-cover z-10"
				autoPlay
				loop
				muted
				src={video}
				type="video/mp4"
			/> */}
			<div className="hero-container mx-auto w-full z-20 h-full">
				<div className="hero-content mx-auto h-screen flex flex-col justify-center px-6">
					<h2 className="hero-heading1 text-5xl text-white font-2">creative</h2>
					<h1 className="hero-heading2 lg:text-7xl md:text-5xl sm:text-3xl uppercase font-extrabold my-5 transition-all duration-500 ease-in-out text-white">
						Digital agency
					</h1>
					<div className="hero-u"></div>
					<h3 className="hero-type"></h3>
				</div>
				<div className="hero-bottom-content sm:relative sm:bg-blue-400 md:absolute z-50">
					<div className="bottom-row container grid bg-black sm:grid-cols-1 md:grid-cols-3 justify-center items-center">
						<HeroCards />
						<HeroCards />
						<HeroCards />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
