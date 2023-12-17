import React from "react";

function Experience() {
  return (
    <div
      id="experience"
      className="flex flex-row items-center border-t border-black"
    >
      <h1 className="w-1/4 text-center text-2xl">Experience</h1>
      <div className="flex-1 py-4">
        <div className="mb-4 w-11/12 rounded-lg border bg-white p-4">
          <div className="flex flex-row justify-between">
            <h3 className="text-xl font-medium">Persistent Systems</h3>
            <h5 className="text-sm">Jul 2023 - Present</h5>
          </div>
          <h5 className="text-md">Senior Software Engineer</h5>
          <p className="pl-4 text-sm">
            <ul className="list-disc">
              <li>
                Worked upon creating a portal for gathering real-time data from
                kidney dialysis IOT devices.
              </li>
              <li>
                Developed user-friendly frontend for real-time visualization
                using charts.
              </li>
              <li>
                Worked to optimize performance of charts for handling enormous
                amount of data on browser.
              </li>
              <li>
                Implemented a tailor-made caching mechanism on UI using chartjs
                and redux.
              </li>
              <li>
                Worked on setting up the unit testing framework for project.
              </li>
              <li>Got awarded with Top Talent Award 2023</li>
            </ul>
          </p>
        </div>
        <div className="mb-4 w-11/12 rounded-lg border bg-white p-4">
          <div className="flex flex-row justify-between">
            <h3 className="text-xl font-medium">Persistent Systems</h3>
            <h5 className="text-sm">Jul 2021 - Jul 2023</h5>
          </div>
          <h5 className="text-md">Software Engineer</h5>
          <p className="pl-4 text-sm">
            <ul className="list-disc">
              <li>
                Worked upon Patient and Clinician which is a Digital Healthcare
                Platform for Kidney dialysis patients and clinicians.
              </li>
              <li>
                Worked upon Smart Healthcare Device Integration with browser
                platform for receiving real-time vitals.
              </li>
              <li>Worked with Umbraco and C# for handling backend logic.</li>
            </ul>
          </p>
        </div>
        <div className="mb-4 w-11/12 rounded-lg border bg-white p-4">
          <div className="flex flex-row justify-between">
            <h3 className="text-xl font-medium">Persistent Systems</h3>
            <h5 className="text-sm">Jan 2021 - Jul 2021</h5>
          </div>
          <h5 className="text-md">Software Development Intern</h5>
          <p className="pl-4 text-sm">
            <ul className="list-disc">
              <li>
                Worked upon a internal project for Learning Portal, which
                tracked progress of course for each learner.
              </li>
              <li>
                Worked upon Post-Course certificate generation after successful
                course completion using @react-pdf
              </li>
              <li>Got awarded with GEMS certificate.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
