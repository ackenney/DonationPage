
import { Button } from "../../components/Button";
import { Section } from "../../components/layouts/Section";


import img1 from "/images/rdne-6647119.jpg"

export default function HeroSection() {
  return (
    <Section id="home">
      <div className="grid lg:grid-cols-2 lg:gap-8 w-full lg:max-w-7xl lg:mx-auto lg:px-8 lg:py-24">
        <div className="order-last lg:order-first flex flex-col items-start lg:justify-center gap-4 p-8 lg:p-0">
          <h1 className="text-3xl text-TextColor2lg:text-6xl font-bold">
            Mission Statement
          </h1>
          <p className="lg:text-lg text-TextColor2 leading-loose lg:leading-10">
          According to the Pennsylvania System of School Assessment, 34.2% of Philly students in grades 3-8 scored proficient or above on English Language Arts in 2023-24 — the same percentage as in 2022-23. Statewide, students’ English Language Arts proficiency decreased from 54.5% in 2022-23 to 53.9% in 2023-24. Test scores, however, don’t tell a whole story. Across the city, parents, reading specialists, teachers, advocates, and other community members work hard to support children’s learning needs, but many do not have the capacity to solve for multiple factors that are consequences of poverty—and certainly not for every student. Maroon Strategy uses a one-on-one approach and taps into the cultural strengths and pride from which Black students in Philly come. 
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
