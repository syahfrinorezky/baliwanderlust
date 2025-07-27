import AboutUs from "./section/About";
import OurTeam from "./section/OurTeam";
import OurJourney from "./section/OurJourney";

export default function About() {
  return (
    <div className="space-y-20">
      <AboutUs />
      <OurTeam />
      <OurJourney />
    </div>
  );
}
