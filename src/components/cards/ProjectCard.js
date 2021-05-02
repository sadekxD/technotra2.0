import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import styled, { css, keyframes } from "styled-components";

const ProjectCard = ({ animName }) => {
	const tilt = useRef(null);

	useEffect(() => {
		VanillaTilt.init(tilt.current, { speed: 500, max: 5 });
	}, []);

	return (
		<Card ref={tilt} animName={animName}>
			<a href="#">
				<div className="project-wrapper lg:px-4 my-4">
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
								<div className="project-info text-center w-full p-4">
									<h2 className="text-blue-50 text-2xl font-bold mb-3">
										Front-end Developement
									</h2>
									<h3 className="text-blue-50 text-2xl">React Js</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</a>
		</Card>
	);
};

const anim1 = keyframes`
				0% {
					transform: translateY(20px);
				}
				100% {
					transform: translateY(-20px);
				}
			`;

const anim2 = keyframes`
				0% {
					transform: translateY(-20px);
				}
				100% {
					transform: translateY(20px);
				}
			`;

const Card = styled.div`
	.project-info {
		transform: translateY(120%);
		transition: all 0.3s ease-in-out;
	}

	.item {
		animation: ${({ animName }) =>
			animName === "anim2"
				? css`
						${anim2} 5s linear infinite alternate-reverse
				  `
				: css`
						${anim1} 5s linear infinite alternate-reverse
				  `};
		box-shadow: rgb(4, 229, 229, 0.2) 0px 28px 60px;
		transition: all 0.5s ease 0s;

		.project-img {
			position: relative;

			img {
				min-height: 400px;
				max-height: 400px;
				width: 100%;
				transition: all 0.5s ease-in-out;

				@media screen and (min-width: 1024px) {
					min-height: 600px;
					max-height: 600px;
				}

				@media screen and (min-width: 1324px) {
					min-height: 700px;
					max-height: 700px;
				}
			}

			&::after {
				content: "";
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 100%;
				opacity: 0;
				transition: all 0.4s ease-in-out;
				background: linear-gradient(
					to bottom,
					rgba(0, 0, 0, 0),
					rgba(0, 0, 0, 0),
					rgba(0, 0, 0, 0),
					rgba(150, 173, 211, 0.8)
				);
			}
		}

		&:hover {
			.project-img {
				img {
					transform: scale(1.1);
				}

				&::after {
					opacity: 1;
				}
			}
			.project-info {
				transform: translateY(0%);
			}
		}
	}
`;

export default ProjectCard;
