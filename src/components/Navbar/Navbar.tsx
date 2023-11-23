import {Link} from "gatsby";
import React from "react";

function Navbar() {
  return (
    <nav className="mx-auto flex w-max space-x-4 rounded-b-md border-x-2 border-b-2 border-black bg-white p-4">
      <Link to="/#about" className="flex-1 text-center">
        About
      </Link>
      <Link to="/#experience" className="flex-1 text-center">
        Experience
      </Link>
      <Link to="/#education" className="flex-1 text-center">
        Education
      </Link>
      <Link to="/#projects" className="flex-1 text-center">
        Projects
      </Link>
      <Link to="/#skills" className="flex-1 text-center">
        Skills
      </Link>
      <Link to="/#contact" className="flex-1 text-center">
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
