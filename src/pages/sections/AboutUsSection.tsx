import { Section } from "../../components/layouts/Section";

/* import img from "../../../public/images/rdne-6646981.jpg"
 */
export default function AboutUsSection() {
  return (
    <Section id="about-us" className="bg-offWhite">
      <div className="w-full lg:max-w-7xl lg:mx-auto flex flex-col items-center gap-20 p-8 lg:py-28">
      {/*   <img
          className="rounded-3xl w-full"
          src={img} alt="img2" />  */}
        <div className="flex flex-col  items-center">
          <span className="text-xs lg:text-sm text-navy tracking-widest">ABOUT US</span>
          <h2 className="text-3xl lg:text-5xl text-salmon font-bold">Maroon Strategy</h2>
          <p className="py-4 leading-loose text-nearBlack lg:leading-9">
          According to the Pennsylvania System of School Assessment, 34.2% of Philly students in grades 3-8 scored proficient or above on English Language Arts in 2023-24 — the same percentage as in 2022-23. Statewide, students’ English Language Arts proficiency decreased from 54.5% in 2022-23 to 53.9% in 2023-24. Test scores, however, don’t tell a whole story. Across the city, parents, reading specialists, teachers, advocates, and other community members work hard to support children’s learning needs, but many do not have the capacity to solve for multiple factors that are consequences of poverty—and certainly not for every student. Maroon Strategy uses a one-on-one approach and taps into the cultural strengths and pride from which Black students in Philly come. 
          </p>
      
        </div>
      </div>
    </Section>
  );
}
