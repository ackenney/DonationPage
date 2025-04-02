import {CheckIcon } from "lucide-react";
import { Section } from "../../components/layouts/Section";
import { OurServicesCard } from "../../components/OurServicesCard";

export default function OurServicesSection() {
  return (
    <Section id="our-services">
      <div className="w-full lg:max-w-7xl lg:mx-auto flex flex-col items-center gap-20 p-8 lg:py-28">
        <div className="text-center">
          <span className="text-xs lg:text-sm text-neutral-600 tracking-widest">
            SERVICES
          </span> 
          <h2 className="text-3xl lg:text-5xl font-bold">
            How We Help Our Community
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between gap-y-16 lg:gap-x-6">
          <OurServicesCard
            title="Section 1"
            icon={<CheckIcon size={36} className="text-white" />}
          >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.          </OurServicesCard>
          <OurServicesCard
            title="Section 2"
            icon={<CheckIcon size={36} className="text-white" />}
          >
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.          </OurServicesCard>
          <OurServicesCard
            title="Section 3"
            icon={<CheckIcon size={36} className="text-white" />}
          >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.          </OurServicesCard>
        </div>
      </div>
    </Section>
  );
}
