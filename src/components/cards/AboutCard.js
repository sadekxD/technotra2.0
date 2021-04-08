import React from "react";
import styled from "styled-components";

const AboutCard = () => {
	return (
		<Card>
			<div className="animated">
				<div className="about-counter flex justify-center mb-24">
					<div className="counter text-white relative">
						<span className="value font-2">500</span>
						<span className="symbol absolute top-4 text-blue-300">+</span>
						<div>
							<span className="counter__Text-xnsd2y-2 vUQCe text-blue-300">
								5 Years of Experience
							</span>
						</div>
					</div>
				</div>
			</div>
		</Card>
	);
};

const Card = styled.div`
	.animated {
		.about-counter {
			.counter {
				width: fit-content;
				.value {
					font-size: 120px;
				}
				.symbol {
					font-size: 40px;
				}
			}
		}
	}
`;

export default AboutCard;
