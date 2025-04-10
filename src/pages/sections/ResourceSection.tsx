import { ResourceItem } from "../../components/ResouceItem";
import { Section } from "../../components/layouts/Section";

export default function ResourceSection() {
  return (
    <Section id="resource" className="bg-sky-100/70">
      <div className="w-full lg:max-w-7xl lg:mx-auto p-8 lg:py-28 flex flex-col items-center gap-16">
        <div className="flex flex-col items-center">
          <span className="text-xs lg:text-sm text-TextColor1 tracking-widest">LEARN MORE</span>
          <h2 className="text-3xl lg:text-5xl text-sky-900 text-center font-bold">Resources</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ResourceItem question="How can I donate?">
          Resource Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </ResourceItem>
          <ResourceItem question="Resource Title 2?">
          Resource Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </ResourceItem>
          <ResourceItem question="Resource Title 3?">
          Resource Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </ResourceItem>
          <ResourceItem question="Resource Title 4?">
          Resource Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </ResourceItem>
          <ResourceItem question="Resource Title 5?">
          Resource Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </ResourceItem>
          <ResourceItem question="Resource Title 6...?">
          Resource Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </ResourceItem>
    
        </div>
    
      </div>
    </Section>
  );
}
