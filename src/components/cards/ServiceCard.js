import React from "react";
import styled from "styled-components";

const ServiceCard = () => {
	return (
		<Card className="p-10 flex flex-col items-center rounded-2xl overflow-hidden transition-all duration-200 ease-in-out">
			<img
				className="w-14 h-14 mb-6 object-cover"
				src="https://abstract-r3tr0.vercel.app/static/539c428f150ca73efeb1f2ed1d7abd9c/46604/mobile.png"
				alt="img"
			/>
			<h1 className="heading font-2 text-white sm:text-xl md:text-2xl uppercase block text-center">
				Mobile app <span className="text-blue-300">developement</span>
			</h1>
			<div className="h-1 w-10 bg-blue-300 my-4"></div>
			<ul className="desc text-blue-50 text-sm">
				<li>Lorem Ipsum dolor sit ammet</li>
				<li>Lorem Ipsum dolor sit ammet</li>
				<li>Lorem Ipsum dolor sit ammet</li>
			</ul>
		</Card>
	);
};

const Card = styled.div`
	background-color: rgb(0, 0, 0);

	&:hover {
		box-shadow: rgb(4, 229, 229, 0.1) 0px 28px 60px;
		transform: translateY(-10px);
	}

	.desc {
		list-style: circle;

		li {
			line-height: 30px;
		}
	}
`;

export default ServiceCard;
