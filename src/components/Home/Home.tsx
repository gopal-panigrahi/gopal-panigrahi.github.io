import React from "react";

function Home() {
  return (
    <div className="flex h-full justify-center">
      <div className="mt-32 flex flex-col">
        <h1 className="text-center text-8xl">
          GOPAL <br /> PANIGRAHI
        </h1>
        <p className="text-center text-4xl">Senior Software Engineer</p>
        <button className="mx-auto mt-4 rounded-lg border border-black p-2">
          Download Resume
        </button>
      </div>
    </div>
  );
}

export default Home;
