import * as React from "react";
import type {HeadFC, PageProps} from "gatsby";
import Navbar from "../components/Navbar/Navbar";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="h-screen bg-green-200">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Education />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>My Profile</title>;
