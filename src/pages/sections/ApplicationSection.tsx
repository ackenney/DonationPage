import { Section } from "../../components/layouts/Section";
import { ApplicationCard } from "../../components/ApplicationCard";

import img1 from "/images/vector-student-glyph-black-icon-1680392795.jpg"
import img2 from "/images/teacher-icon-design-free-vector-2580301237.jpg"
import img3 from "/images/th-2951852438.jpg"
import img4 from "/images/Document-3757720690.png"


export default function ApplicationSection() {
  return (
    <Section id="application" className="bg-sky-800">
      <div className="w-full lg:max-w-7xl lg:mx-auto bg-[url('/images/philadelphia-skyline-1219756.jpg')] bg-cover bg-no-repeat bg-top bg-fixed">
        <div className="flex flex-col gap-16 items-center p-8 lg:py-20 backdrop-grayscale bg-gradient-to-r from-sky-800 via-sky-800/50 via-50% to-sky-800">
        <div className="flex flex-col text-center">
          <span className="text-xs lg:text-sm text-TextColor1 tracking-widest">
            APPLICATIONS
          </span>
          <h2 className="text-3xl lg:text-5xl text-white font-bold">
            Get Involved
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-16 justify-between">
          <ApplicationCard
            imageUrl={img1}
            title="Student Application"
          
          >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua          </ApplicationCard>
          <ApplicationCard
            imageUrl={img2}
            title="Job Application"
            
          >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua          </ApplicationCard>
          <ApplicationCard
            imageUrl={img3}
            title="Grants Application"
        
          >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua          </ApplicationCard>
          <ApplicationCard
            imageUrl={img4}
            title="Summer Program"
        
          >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua          </ApplicationCard>
        
        </div>
      
        </div>
      </div>
    </Section>
  );
}
