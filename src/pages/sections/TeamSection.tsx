import { Section } from "../../components/layouts/Section";

import img1 from "/images/thispersondoesnotexist.com-image01-1024x1024-1933487677.jpg"
import img2 from "/images/this-person-does-not-exist-v0-9l5x3d2g21591-2237696112.jpg"



const teamMembers = [
  { name: "John Doe", title: "CEO", imageUrl: img2 },
  { name: "Jane Smith", title: "CTO", imageUrl: img1 },
  { name: "Alice Brown", title: "COO", imageUrl: img1 },
  { name: "Bob Wilson", title: "CFO", imageUrl: img2 },
  { name: "Emily Davis", title: "CMO", imageUrl: img1},

];

export default function TeamSection() {
  return (
    <Section id="team" className="bg-sky-800">
      <div className="w-full lg:max-w-7xl lg:mx-auto bg-[url('/images/philadelphia-skyline-1219756.jpg')] bg-cover bg-no-repeat bg-top bg-fixed">
        <div className="flex flex-col gap-16 items-center p-8 lg:py-20 backdrop-grayscale bg-gradient-to-r from-sky-800 via-sky-800/50 via-50% to-sky-800">
          <div className="text-center">
            <span className="text-xs lg:text-sm text-neutral-200 tracking-widest">
              FOUNDERS
            </span>
            <h2 className="text-3xl lg:text-1xl text-white font-bold">Our Team</h2>
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