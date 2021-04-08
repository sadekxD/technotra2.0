import React from "react";

const HeroCards = () => {
	return (
		<div className="hero-card max-w-xl w-full p-10 flex flex-col justify-self-center transition-all duration-200 ease-in-out bg-dark-2">
			<div className="icon text-gray-400">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-16 w-16"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
					/>
				</svg>
			</div>
			<div className="hero-card-title font-2 text-gray-100 text-3xl my-3">
				Web Expert
			</div>
			<div className="hero-card-u w-8 h-1 bg-blue-400"></div>
			<div className="hero-card-desc text-gray-400 text-sm mt-3 mb-5">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae
				ultricies lacus, vitae varius velit. Pellentesque blandit libero eu
				turpis condimentum bibendum.
			</div>
		</div>
	);
};

export default HeroCards;
