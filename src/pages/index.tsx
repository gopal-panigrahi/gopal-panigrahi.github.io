import * as React from "react";
import type {HeadFC, PageProps} from "gatsby";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <div className="h-screen bg-green-300">
        <Navbar />
        <Home />
      </div>
      <About />
      <Experience />
      <Education />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>My Profile</title>;
