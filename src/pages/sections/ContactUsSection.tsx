import { Mail } from "lucide-react";

import { Section } from "../../components/layouts/Section";
import { ContactItem } from "../../components/contact/ContactItem";
import { ContactList } from "../../components/contact/ContactList";

export default function ContactUsSection() {
  return (
    <Section id="contact-us" className="bg-offWhite">
      <div className="w-full lg:max-w-7xl lg:mx-auto p-8 lg:py-28 flex flex-col gap-16">
        <div className="flex flex-col items-center">
        {   <span className="text-xs lg:text-sm text-navy tracking-widest">
            REACH OUT
          </span> }
          <h2 className="text-3xl lg:text-5xl text-salmon font-bold">
            Contact Us
          </h2>
        </div>

        <div className="w-full flex sm:justify-center lg:justify-start">
          <div className="lg:w-full flex flex-col text-nearBlack lg:flex-row lg:justify-around gap-8">
        {/*     <ContactItem
              heading="Location"
              icon={<MapPin className="size-12 text-nearGreen" />}
            >
              <ContactList title="Main Address">
                72 Kendell Street<br />
                Shelderton, 00000<br />
                United Kingdom
              </ContactList>
            </ContactItem>
 */}
            <ContactItem
              heading="Email"
              icon={<Mail className="size-12 text-nearGreen" />}
            >

              <ContactList title="Dr. Destiny Crockett  (She/Her)">
              destiny@maroonstrategy.org
              </ContactList>
      
            </ContactItem>

  {/*           <ContactItem
              heading="Phone"
              icon={<PhoneCall className="size-12 text-nearGreen" />}
            >
              <ContactList title="Landline">
              +00 000-0000-0000
              </ContactList>
              <ContactList title="Mobile">
                +00 000-0000-0000
              </ContactList>
            </ContactItem> */}
          </div>
        </div>
      </div>
    </Section>
  );
}
