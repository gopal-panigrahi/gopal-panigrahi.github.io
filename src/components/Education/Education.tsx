import React from "react";

function Education() {
  return (
    <div
      id="education"
      className="flex flex-row items-center border-t border-black"
    >
      <h1 className="w-1/4 text-center text-2xl">Education</h1>
      <div className="flex-1 py-4">
        <div className="mb-4 w-11/12 rounded-lg border bg-white p-3">
          <h3 className="text-xl font-medium">Bachelor Of Engineering</h3>
        </div>
        <div className="mb-4 w-11/12 rounded-lg border bg-white p-3">
          <h3 className="text-xl font-medium">Class XII</h3>
        </div>
        <div className="mb-4 w-11/12 rounded-lg border bg-white p-3">
          <h3 className="text-xl font-medium">Class X</h3>
        </div>
      </div>
    </div>
  );
}

export default Education;
