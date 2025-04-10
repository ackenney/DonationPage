import {BookCheck,Glasses, LibraryBig} from "lucide-react";
import { Section } from "../../components/layouts/Section";
import { OurServicesCard } from "../../components/OurServicesCard";

export default function OurServicesSection() {
  return (
    <Section id="our-services">
      <div className="w-full lg:max-w-7xl lg:mx-auto flex flex-col items-center gap-20 p-8 lg:py-28">
        <div className="text-center">
          <span className="text-xs lg:text-sm text-TextColor1 tracking-widest">
            SERVICES
          </span> 
          <h2 className="text-3xl lg:text-5xl text-TextColor2 font-bold">
            What We Do
          </h2>
        </div>
        <div className="flex flex-col lg:flex-col lg:justify-between gap-y-16 lg:gap-x-6">
          <OurServicesCard
            title="Library Fund"
            icon={<LibraryBig size={36} className="text-white" />}
          >
          The Literacy Fund, which will collaborate with parents to match their child to a private certified reading specialist outside of school. Reading specialists are able to provide learning disability assessments if needed and to tailor one-on-one literacy instruction to children’s needs. Maroon Strategy will cover the costs to see reading specialists, as well as schedule and pay for transportation to and from these appointments.          </OurServicesCard>
          <OurServicesCard
            title="Summer Program"
            icon={<Glasses size={36} className="text-white" />}
          >
           Maroon Studio will begin during the summer of 2026, and operate for fifteen days, serving young people in grades 3rd-6th. We will offer high quality summer enrichment with experienced educators and teaching artists who focus on literacy as well as culturally significant modes of learning such as arts instruction.           </OurServicesCard>
          <OurServicesCard
            title="Library Cut Grant"
            icon={<BookCheck size={36} className="text-white" />}
          >
          The Library Cut is a one-time grant for children (infant to 8th grade) to add books of their/their parents’ choice to their at-home libraries. Once parents and children select their books, Maroon Strategy purchases them directly to be shipped or delivered to homes.        </OurServicesCard>
        </div>
      </div>
    </Section>
  );
}
