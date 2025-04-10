import { Section } from "../../components/layouts/Section";

import img1 from "/images/AsanniYork.jpg"
import img2 from "/images/JeannineCook.jpg"
import img3 from "/images/DestinyCrockett3.jpg"
import img4 from "/images/DarisMcInnis2.jpg"



const teamMembers = [
  { name: "Dr. Destiny Crockett ", title: "Founder", imageUrl: img3 },
  { name: "Jeannine A. Cook ", title: "Board Member", imageUrl: img2 },
  { name: "Asanni A. York ", title: "Board Member", imageUrl: img1 },
  { name: "Dr. Daris McInnis ", title: "Board Member", imageUrl: img4},

];

export default function TeamSection() {
  return (
    <Section id="team" className="bg-nearGreen">
      <div className="w-full lg:max-w-7xl lg:mx-auto bg-[url('/images/philadelphia-skyline-1219756.jpg')] bg-cover bg-no-repeat bg-top bg-fixed">
        <div className="flex flex-col gap-16 items-center p-8 lg:py-20 backdrop-grayscale bg-gradient-to-r from-nearGreen via-nearGreen/50 via-50% to-nearGreen">
          <div className="text-center">
            <span className="text-xs lg:text-sm text-salmon tracking-widest">
              OUR TEAM
            </span>
            <h2 className="text-3xl lg:text-1xl text-navy font-bold">Founders</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col bg-white rounded-xl items-center text-center">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-40 h-40 object-cover rounded-xl"
                />
                <h3 className="text-TextColor2 font-bold mt-4">{member.title}</h3>
                <p className="text-TextColor1">{member.name}</p>
                <p className="mt-3"></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}