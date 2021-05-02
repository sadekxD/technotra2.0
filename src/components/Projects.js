import React from "react";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import ProjectCard from "./cards/ProjectCard";

const Projects = () => {
	return (
		<ProjectsSection>
			<div className="mx-auto py-24 bg-black">
				<div className="projects-container">
					<motion.h2 className="heading uppercase text-4xl md:text-7xl mb-20 text-center">
						<motion.span className="text-white">r</motion.span>
						<motion.span className="text-white">e</motion.span>
						<motion.span className="text-white">c</motion.span>
						<motion.span className="text-white">e</motion.span>
						<motion.span className="text-white">n</motion.span>
						<motion.span className="text-white">t</motion.span>
						<motion.span className=""> </motion.span>
						<motion.span className="text-blue-300">p</motion.span>
						<motion.span className="text-blue-300">r</motion.span>
						<motion.span className="text-blue-300">o</motion.span>
						<motion.span className="text-blue-300">j</motion.span>
						<motion.span className="text-blue-300">e</motion.span>
						<motion.span className="text-blue-300">c</motion.span>
						<motion.span className="text-blue-300">t</motion.span>
						<motion.span className="text-blue-300">s</motion.span>
					</motion.h2>

					<div className="projects py-4 px-4 sm:px-12 lg:px-12">
						<div>
							<div className="project-list grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-9">
								<ProjectCard />
								<ProjectCard animName="anim2" />
								<ProjectCard />
								<ProjectCard animName="anim2" />
								<ProjectCard />
								<ProjectCard />
							</div>
						</div>
					</div>
				</div>
			</div>
		</ProjectsSection>
	);
};

const ProjectsSection = styled.div`
	.heading {
		* {
			font-family: "Oswald", sans-serif;
		}
	}
`;

export default Projects;
