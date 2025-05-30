
import { Button } from "../../components/Button";
import { Section } from "../../components/layouts/Section";


import img1 from ".//../..//../public/images/1.png"

export default function HeroSection() {
  return (
    <Section id="home" className="bg-offWhite">
      <div className="grid lg:grid-cols-2 lg:gap-8 w-full lg:max-w-7xl lg:mx-auto lg:px-8 lg:py-24">
        <div className="order-last lg:order-first flex flex-col items-start lg:justify-center gap-4 p-8 lg:p-0">
        
          <h1 className="text-3xl text-salmon lg:text-6xl font-bold">
            Mission Statement
          </h1>
          <p className="lg:text-lg text-nearBlack leading-loose lg:leading-10">
          Maroon Strategy’s mission is to develop strong readers by filling funding and access gaps for Black children who face multiple barriers to traditional literacy—interpreting and communicating in the written word—so they may merge skilled reading with the creative and critical literacies already instilled in them by their families, communities, and cultures.            </p>
          
          <Button className="text-md font-bold" size="lg">
      
            <a href="https://cash.app/$MaroonStrategy">
                Donate Now
            </a>
          </Button>
        
        </div>
      <img 
          className="lg:rounded-3xl w-90"
          src={img1} alt="img"
        />
      </div>
    </Section>
  );
}
