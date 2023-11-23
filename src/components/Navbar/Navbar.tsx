import React from "react";

function Navbar() {
	return (
		<nav className="mx-auto flex w-1/2 space-x-4 rounded-b-md border-x-2 border-b-2 border-black bg-white p-4">
			<a className="flex-1 text-center">About</a>
			<a className="flex-1 text-center">Experience</a>
			<a className="flex-1 text-center">Education</a>
			<a className="flex-1 text-center">Projects</a>
			<a className="flex-1 text-center">Skills</a>
			<a className="flex-1 text-center">Contact</a>
		</nav>
	);
}

export default Navbar;
