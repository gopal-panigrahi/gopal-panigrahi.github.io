import React from "react";

function Navbar() {
	return (
		<nav className="fixed top-1/3 flex w-max flex-col border-2 border-black bg-white p-4">
			<a className="flex-1">About</a>
			<a className="flex-1">Experience</a>
			<a className="flex-1">Education</a>
			<a className="flex-1">Projects</a>
			<a className="flex-1">Skills</a>
			<a className="flex-1">Contact</a>
		</nav>
	);
}

export default Navbar;
