import React from "react";
import Particles from "react-particles-js";

const ParticlesBg = () => {
	return (
		<Particles
			className="absolute top-0 bottom-0 left-0 right-0 bg-black"
			params={{
				particles: {
					number: {
						value: 60,
					},
					shape: {
						type: "polygon",
					},
					size: {
						value: 3,
						anim: {
							speed: 1,
						},
					},
					move: {
						speed: 0.5,
					},
				},
				interactivity: {
					events: {
						onhover: {
							enable: true,
							mode: "repulse",
						},
					},
				},
			}}
		/>
	);
};

export default ParticlesBg;
