import * as React from "react";
import type {HeadFC, PageProps} from "gatsby";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Background from "../components/Background";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Background />
      <div className="z-1 relative">
        <div className="h-screen">
          <Navbar />
          <Home />
        </div>
        <About />
        <Experience />
        <Education />
      </div>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>My Profile</title>;
