import ResourceSection from "./sections/ResourceSection";
import HeroSection from "./sections/HeroSection";
import AboutUsSection from "./sections/AboutUsSection";
import ContactUsSection from "./sections/ContactUsSection";
import ApplicationSection from "./sections/ApplicationSection";
import OurServicesSection from "./sections/OurServicesSection";
/* import TeamSection from "./sections/TeamSection"; */
import TeamSection2 from "./sections/TeamSection2"

export default function Home() {
  return (
    <main className="mt-[4.5rem]">
      <HeroSection />
      <AboutUsSection />
    {/*   <TeamSection /> */}
      <OurServicesSection />
      <ApplicationSection/>
      <ResourceSection />
      
      <TeamSection2/>
      <ContactUsSection />
    </main>
  );
}
