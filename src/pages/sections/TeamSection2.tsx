

import img1 from "../../../public/images/AsanniYork.jpg"
import img2 from "../../../public/images/JeannineCook.jpg"
import img3 from "../../../public/images/DestinyCrockett3.jpg"
import img4 from "../../../public/images/DarisMcInnis2.jpg"
import skylineImage from '../../../public/images/philadelphia-skyline-1219756.jpg';


const teamMembers = [
  {
    role: "Founder and Director",
    name: "Dr. Destiny Crockett ",
    description: "Dr. Destiny Crockett has lived in Philadelphia since 2018, and is originally from St. Louis, Mo. Every year since she was about fourteen years old, she has been involved in some form of youth work that centers Black youth, with a focus on culturally intentional, class conscious work. From St. Louis, to New Jersey, to Brooklyn, to Philadelphia, Dr. Crockett has tutored, worked in literacy-based after school programs, developed curricula on Black history, African American literature, visual art and Black feminism for middle school and high school age students, and served as an advocate for family and community members navigating the complexities of finding resources that affirm Black children in who they are while meeting their academic needs. The first in her family to graduate from college, she earned her PhD in English from the University of Pennsylvania with certificates in Africana Studies and Women, Gender, and Sexuality Studies in 2023, and her B.A. in English from Princeton University in 2017. She also serves on the board of ArtWell, a nonprofit that supports young people through arts expression. She enjoys writing poetry, making figurative collages, reading, collecting Black children’s books, and reminiscing on her days as kid who loved the St. Louis Public Library.",
    imgUrl: img3
  },
  {
    role: "Board Member",
    name: "Dr. Daris McInnis",
    description: "Dr. Daris McInnis hails from Flint, Michigan, and serves as an Asst. Professor of Literacy at West Chester University of Pennsylvania. He teaches courses on English Language Arts instruction, reading strategies, multicultural education, and graduate-level classes in the M.Ed. Reading Specialist and Doctor of Education programs. Daris also serves as the summer learning curriculum specialist for the Free Library of Philadelphia. He earned his doctorate in Reading/Writing/Literacy from the University of Pennsylvania, with a dissertation focused on the experiences of Black and Hispanic families in supporting their children's education during the COVID-19 pandemic. His research interests include reading instruction, critical literacy, family literacy, literacy development among Black children, and public health within marginalized communities. Before moving to Pennsylvania, Daris taught early childhood and elementary grades in the Washington, D.C. area, was an Americorps member, and volunteered as a Play Ranger with the Homeless Children's Playtime Project. A former active duty Munitions and Logistics Officer, he is also a Pat Tillman Scholar and an Education Pioneers alum, having served in the West Bank of New Orleans, LA. He also volunteers his time as a reading specialist in New Castle County, Delaware, and serves as a Board Member for Reading is Fundamental, BookSmiles, and Polymath-U. In his free time, Daris enjoys reading nonfiction about Black migration stories and collecting fragrances.",
    imgUrl: img4
  },
  {
    role: "Board Member",
    name: "Jeannine A. Cook",
    description: "For the last 10 years Jeannine A. Cook has worked as a trusted writer and designer for several startups, corporations, non-profits, influencers, and most recently herself at owner of Harriett’s Bookshop and Ida’s Bookshop",
    imgUrl: img2
  },
  {
    role: "Board Member",
    name: "Asanni A. York",
    description: "Asanni A. York is founder and director of For the Gworls, a non-profit that began as a mutual aid and rapidly grew, raising funds for multiple assistance programs for Black transgender people worldwide. Over the past six years, they have developed an expertise in acquiring funding to meet crucial needs. They graduated from Princeton University with a B.S. in Public Policy in 2017 and have been living, creating art, and building community in Brooklyn, NY ever since. ",
    imgUrl: img1
  },

  
];

export default function TeamSection() {
  return (
    <section className="md:px-16 bg-nearGreen" id="team2">
            <div className="w-full full lg:max-w-9xl lg:mx-auto bg-cover bg-no-repeat bg-top bg-fixed" style={{ backgroundImage: `url(${skylineImage})` }}>
            <div className="flex flex-col gap-16 items-center p-8 lg:py-20 backdrop-grayscale bg-gradient-to-r from-nearGreen via-nearGreen/50 via-50% to-nearGreen">

        <div className="text-center">
            <span className="text-xs lg:text-sm  text-navy tracking-widest">
              OUR TEAM
            </span>
            <h2 className="text-3xl lg:text-1xl text-salmon font-bold">Founders</h2>
          </div>
        
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-offWhite rounded-lg shadow-md p-4">
              <div className="h-40 mb-4 flex items-center justify-center">
              <img
                  src={member.imgUrl}
                  alt={member.name}
                  className="w-40 h-40 object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{member.role}</h3>
              <p className="text-sm font-semibold mb-2">{member.name}</p>
              <p className="text-sm text-nearBlack">{member.description}</p>
            </div>
          ))}
        </div>
        </div>
        </div>
      </section>
  );
}