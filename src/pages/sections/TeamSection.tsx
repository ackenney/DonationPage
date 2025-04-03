import { Section } from "../../components/layouts/Section";
import { TeamCard } from "../../components/TeamCard";

import img1 from "/images/thispersondoesnotexist.com-image01-1024x1024-1933487677.jpg"
import img2 from "/images/this-person-does-not-exist-v0-9l5x3d2g21591-2237696112.jpg"


export default function TeamSection() {
  return (
    <Section id="team" className="bg-sky-800">
      <div className="w-full lg:max-w-7xl lg:mx-auto bg-[url('/images/philadelphia-skyline-1219756.jpg')] bg-cover bg-no-repeat bg-top bg-fixed">
        <div className="flex flex-col gap-16 items-center p-8 lg:py-20 backdrop-grayscale bg-gradient-to-r from-sky-800 via-sky-800/50 via-50% to-sky-800">
        <div className="flex flex-col text-center">
          <span className="text-xs lg:text-sm text-neutral-200 tracking-widest">
            FOUNDERS
          </span>
          <h2 className="text-3xl lg:text-1xl text-white font-bold">
            Our Team
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-16 justify-between">
          <TeamCard
            imageUrl={img1}
            title="Title"
          
          >
          Name </TeamCard>
          <TeamCard
            imageUrl={img2}
            title="Title"
            
          >
          Name</TeamCard>
          <TeamCard
            imageUrl={img1}
            title="Title"
        
          >
          Name  </TeamCard>
          <TeamCard
            imageUrl={img1}
            title="Title"
        
          >
          Name </TeamCard>
          <TeamCard
            imageUrl={img2}
            title="Title"
        
          >
          Name </TeamCard>
          <TeamCard
            imageUrl={img1}
            title="Title"
        
          >
          Name </TeamCard>
        
        </div>
      
        </div>
      </div>
    </Section>
  );
}
