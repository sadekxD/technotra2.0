import React from "react";
import styled, { keyframes } from "styled-components";

const ProjectCard = ({ animName }) => {
	return (
		<Card animName={animName}>
			<a href="#">
				<div className="project-wrapper">
					<div className="item rounded-2xl overflow-hidden relative">
						<div>
							<div className="project-img">
								<img
									className="object-cover"
									src="https://abstract-r3tr0.vercel.app/static/3e7f570b96cd830bb3282be4c0307328/a7715/image.jpg"
									alt="image"
								/>
							</div>
							<div className="absolute h-full w-full top-0 left-0 flex items-end justify-center">
								<div className="project-info text-center w-full py-4">
									<h2 className="text-blue-50 text-2xl font-bold mb-3">
										Front-end Developement
									</h2>
									<h3 className="text-blue-50">React Js</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</a>
		</Card>
	);
};

const Card = styled.div`
	.project-info {
		transform: translateY(120%);
		transition: all 0.3s ease-in-out;
	}

	.item {
		animation: ${({ animName }) =>
			`${animName} 3s linear infinite alternate-reverse`};

		.project-img {
			img {
				min-height: 400px;
				max-height: 400px;
				width: 100%;

				@media screen and (min-width: 1024px) {
					min-height: 600px;
					max-height: 600px;
				}

				@media screen and (min-width: 1324px) {
					min-height: 700px;
					max-height: 700px;
				}
			}
		}
		&:hover {
			.project-info {
				transform: translateY(0%);
			}
		}
	}
`;

export default ProjectCard;
