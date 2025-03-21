import { Section } from "../../components/layouts/Section";

import img from "/images/rdne-6646981.jpg"

export default function AboutUsSection() {
  return (
    <Section id="about-us" className="bg-neutral-100">
      <div className="w-full lg:max-w-7xl lg:mx-auto grid lg:grid-cols-2 gap-8 p-8 lg:py-28">
        <img
          className="rounded-3xl w-full"
          src={img} alt="img2" /> 
        <div className="flex flex-col items-start">
          <span className="text-xs lg:text-sm text-neutral-600 tracking-widest">ABOUT US</span>
          <h2 className="text-3xl lg:text-5xl font-bold">The Hope Network</h2>
          <p className="py-4 leading-loose lg:leading-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.          </p>
      
        </div>
      </div>
    </Section>
  );
}
