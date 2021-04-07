import React from "react";
import ParticlesBg from "./ParticlesBg";

const About = () => {
	return (
		<div id="about" className="relative">
			<ParticlesBg />
			<div className="about-container container min-h-full mx-auto z-50 grid md:grid-cols-1 lg:grid-cols-2 gap-6 justify-center px-6">
				<div className="about-left-col">
					<div>
						<div className="about-reveal-content">
							<h1 className="about-heading text-white font-2 uppercase text-7xl flex flex-col">
								Renowned
								<span className="text-blue-300 font-2">Software</span>
								Company From
								<span className="text-blue-300 font-2">Bangladesh</span>
							</h1>
						</div>
					</div>
				</div>
				<div className="about-right-col">
					<div>
						<div className="h-44 bg-blue-400"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
