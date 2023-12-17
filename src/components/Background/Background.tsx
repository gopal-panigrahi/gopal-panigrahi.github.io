import React from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadSlim} from "@tsparticles/slim";

const Background = () => {
  const [init, setInit] = React.useState(false);

  React.useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    init && (
      <Particles
        id="tsparticles"
        options={{
          background: {color: {value: "#86efac"}},
          fpsLimit: 120,
          interactivity: {events: {resize: {enable: true}}},
          particles: {
            color: {value: "#064e3b"},
            links: {
              color: "#064e3b",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {default: "bounce"},
              random: false,
              speed: 4,
              straight: false
            },
            number: {value: 80},
            opacity: {value: 0.5},
            shape: {type: "dot"}
          }
        }}
        className="-z-1"
      />
    )
  );
};

export default Background;
