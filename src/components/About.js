import React from "react";
import styled from "styled-components";
import AboutCard from "./cards/AboutCard";
import ParticlesBg from "./ParticlesBg";

const About = () => {
	return (
		<StyledAbout id="about" className="relative">
			<ParticlesBg />
			<div className="about-container container min-h-full mx-auto z-50 grid md:grid-cols-1 lg:grid-cols-2 gap-6 justify-center items-center px-6">
				<div className="about-left-col">
					<div>
						<div className="about-reveal-content">
							<h1 className="about-heading text-white font-2 uppercase md:block text-center lg:text-left lg:flex flex-col">
								Renowned <span className="text-blue-300 font-2">Software </span>
								Company From{" "}
								<span className="text-blue-300 font-2">Bangladesh</span>
							</h1>
						</div>
					</div>
				</div>
				<div className="about-right-col">
					<div>
						<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center">
							<AboutCard />
							<AboutCard />
							<AboutCard />
							<AboutCard />
						</div>
					</div>
				</div>
			</div>
		</StyledAbout>
	);
};

const StyledAbout = styled.div`
	min-height: 720px;

	.about-container {
		padding: 300px 24px 100px;

		.about-left-col {
			.about-reveal-content {
				.about-heading {
					font-size: 40px;
					span {
						font-size: 50px;
					}

					@media screen and (min-width: 1024px) {
						font-size: 70px;
						line-height: 75px;

						span {
							font-size: 80px;
						}
					}

					@media screen and (max-width: 768px) {
						font-size: 30px;
						span {
							font-size: 40px;
						}
					}
				}
			}
		}
	}
`;

export default About;
