import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav
			className="w-screen px-4 bg-black bg-opacity-80 text-white fixed top-0 left-0"
			style={{ zIndex: 100}}
		>
			<div className="nav-container h-16 mx-auto flex items-center justify-between">
				<Link to="/" className="text-3xl font-bold">
					Tech
				</Link>
				<div className="hidden md:flex items-center text-sm">
					<Link to="/" className="p-4">
						Home
					</Link>
					<Link to="/team" className="p-4">
						About
					</Link>
					<Link to="/services" className="p-4">
						Services
					</Link>
					<Link to="/team" className="p-4">
						Team
					</Link>
				</div>
				<div className="block md:hidden mr-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16m-7 6h7"
						/>
					</svg>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
