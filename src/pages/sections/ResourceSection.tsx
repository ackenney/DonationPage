import { ResourceItem } from "../../components/ResouceItem";
import { Section } from "../../components/layouts/Section";

export default function ResourceSection() {
  return (
    <Section id="resource" className="bg-lightBlue">
      <div className="w-full lg:max-w-7xl lg:mx-auto p-24 lg:py-28 flex flex-col items-center gap-16">
        <div className="flex flex-col items-center">
          <span className="text-xs lg:text-sm text-navy tracking-widest">RESOURCES</span>
          <h2 className="text-3xl lg:text-5xl text-salmon text-center font-bold">Learn More</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-16">
      
      
          <ResourceItem question="Does Maroon Strategy only serve children who have diagnosed learning disabilities?">
          No, though some children who have been diagnosed with ADHD or dyslexia might find our programs helpful and affirming.
          </ResourceItem>
          <ResourceItem question="Does Maroon Strategy serve children outside of the Philadelphia area?">
          Right now, Maroon Strategy serves children who live in Philadelphia.
          </ResourceItem>
            <ResourceItem question="What method(s) does Maroon Strategy use to develop and enhance student literacy skills?">
          Maroon Strategy contracts with individual reading specialists. Those specialists are versed in the science of reading, an evidence-backed phonics method which emphasizes how letters and sounds work and deemphasizes tools like memorizing or three cueing.
          </ResourceItem>
          <ResourceItem question="Where can I find more information on these methods and why they’re important?">
           Watch <a className="text-salmon" href="https://www.youtube.com/watch?v=_A0Ai5SUi_c">this</a> or read <a  className="text-salmon" href="https://www.improvingliteracy.org/resource/the-science-of-reading-an-overview">this</a> for more information. 
          </ResourceItem>
            
        
          
            <ResourceItem question="How soon can parents and children apply for The Literacy Fund?">
          We will announce application openings on this website once we have met our initial fundraising goal.
          </ResourceItem>
      
        </div>
    
      </div>
    </Section>
  );
}
