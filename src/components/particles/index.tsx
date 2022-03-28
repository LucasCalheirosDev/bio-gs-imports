import { json } from "../../assets";
import { StyledParticles } from "./style";

export function Particles() {
  return (
    <StyledParticles
      id="tsparticles"
      options={{
        fpsLimit: 120,
        particles: {
          color: {
            value: "#fff",
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "out",
            speed: 2,
            straight: false,
            random: true,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  );
}
