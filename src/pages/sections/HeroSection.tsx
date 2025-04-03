import { EuroIcon} from "lucide-react";
import { Button } from "../../components/Button";
import { Section } from "../../components/layouts/Section";
import { ArrowRight } from "lucide-react";

import img1 from "/images/rdne-6647119.jpg"

export default function HeroSection() {
  return (
    <Section id="home">
      <div className="grid lg:grid-cols-2 lg:gap-8 w-full lg:max-w-7xl lg:mx-auto lg:px-8 lg:py-24">
        <div className="order-last lg:order-first flex flex-col items-start lg:justify-center gap-4 p-8 lg:p-0">
          <h1 className="text-3xl text-TextColor2lg:text-6xl font-bold">
            Tag line Here
          </h1>
          <p className="lg:text-lg text-TextColor2 leading-loose lg:leading-10">
           Mission statement: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          
          <Button className="text-md font-bold" size="lg">
      
            <a href="https://www.gofundme.com/">
                Donate Now
            </a>
          </Button>
        
        </div>
        <img 
          className="lg:rounded-3xl w-full"
          src={img1} alt="img"
        />
      </div>
    </Section>
  );
}
