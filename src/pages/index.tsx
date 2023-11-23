import * as React from "react";
import type {HeadFC, PageProps} from "gatsby";
import Navbar from "../components/Navbar/Navbar";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";

const IndexPage: React.FC<PageProps> = () => {
	return (
		<div className="h-screen bg-green-200">
			<Navbar />
			<Home />
			<About />
			<Experience />
		</div>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
