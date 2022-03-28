import { json } from "../../assets";
import { StyledParticles } from "./style";

export function Particles() {
  return <StyledParticles options={json.particlesConfig} />;
}
