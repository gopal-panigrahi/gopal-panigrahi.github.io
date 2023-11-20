import * as React from "react";
import type {HeadFC, PageProps} from "gatsby";
import Navbar from "../components/Navbar/Navbar";
import About from "./About";

const IndexPage: React.FC<PageProps> = () => {
	return (
		<>
			<Navbar />
			<About />
		</>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
