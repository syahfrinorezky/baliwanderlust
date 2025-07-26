import AboutUs from "./section/About";
import OurTeam from "./section/OurTeam";

export default function About() {
  return (
    <div className="space-y-20 bg-white dark:bg-neutral-900 transition-all duration-300 ease-in-out">
      <AboutUs />
      <OurTeam />
    </div>
  );
}
