import { Section } from "../../components/layouts/Section";
import { ApplicationCard } from "../../components/ApplicationCard";


import img1 from '../../../public/images/philadelphia-skyline-1219756.jpg';
import img2 from '../../../public/images/philadelphia-skyline-1219756.jpg';
import img3 from '../../../public/images/philadelphia-skyline-1219756.jpg';
import img4 from '../../../public/images/philadelphia-skyline-1219756.jpg';
import skylineImage from '../../../public/images/philadelphia-skyline-1219756.jpg';


export default function ApplicationSection() {
  return (
    <Section id="application" className="bg-nearGreen">
      <div className="w-full lg:max-w-7xl lg:mx-auto bg-cover bg-no-repeat bg-top bg-fixed" style={{ backgroundImage: `url(${skylineImage})` }}>
      <div className="flex flex-col gap-16 items-center p-8 lg:py-20 backdrop-grayscale bg-gradient-to-r from-nearGreen via-nearGreen/50 via-50% to-nearGreen">
        <div className="flex flex-col text-center">
          <span className="text-xs lg:text-sm text-navy tracking-widest">
            APPLICATIONS
          </span>
          <h2 className="text-3xl lg:text-5xl text-salmon font-bold ">
            Get Involved
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-16 justify-between">
          <ApplicationCard
            imageUrl={img1}
            link={"/FundApplication/"}
            title="Literacy Fund Application"
          
          >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua          </ApplicationCard>
          <ApplicationCard
            imageUrl={img2}
            title="Library Grant Application"
            link={"/GrantApplication/"}
          >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua          </ApplicationCard>
          <ApplicationCard
            imageUrl={img3}
            title="Reader Job Application"
            link={"/app/"}
          >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua          </ApplicationCard>
          <ApplicationCard
            imageUrl={img4}
            title="Summer Program Application"
            link={"/app/"}
          >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua          </ApplicationCard>
        
        </div>
      
        </div>
      </div>
    </Section>
  );
}
