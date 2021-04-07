import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="w-screen px-4 bg-black bg-opacity-80 text-white fixed top-0 left-0 z-50">
			<div className="nav-container h-16 mx-auto flex items-center justify-between">
				<Link to="/" className="text-3xl font-bold">
					Tech
				</Link>
				<div className="flex items-center text-sm">
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
			</div>
		</nav>
	);
};

export default Navbar;
