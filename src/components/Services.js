import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ServiceCard from "./cards/ServiceCard";

const Services = () => {
	return (
		<ServiceSection id="services" className="bg-black">
			<div className="container mx-auto py-24">
				<div className="service-container">
					<motion.h2 className="heading uppercase text-4xl md:text-7xl mb-20 text-center">
						<motion.span className="text-white">o</motion.span>
						<motion.span className="text-white">u</motion.span>
						<motion.span className="text-white">r</motion.span>
						<motion.span className=""> </motion.span>
						<motion.span className="text-blue-300">s</motion.span>
						<motion.span className="text-blue-300">e</motion.span>
						<motion.span className="text-blue-300">r</motion.span>
						<motion.span className="text-blue-300">v</motion.span>
						<motion.span className="text-blue-300">i</motion.span>
						<motion.span className="text-blue-300">c</motion.span>
						<motion.span className="text-blue-300">e</motion.span>
						<motion.span className="text-blue-300">s</motion.span>
					</motion.h2>

					<div className="services p-6">
						<div>
							<div className="service-list grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-5">
								<ServiceCard />
								<ServiceCard />
								<ServiceCard />
								<ServiceCard />
								<ServiceCard />
								<ServiceCard />
							</div>
						</div>
					</div>
				</div>
			</div>
		</ServiceSection>
	);
};

const ServiceSection = styled.div`
	.heading {
		* {
			font-family: "Oswald", sans-serif;
		}
	}
`;

export default Services;
