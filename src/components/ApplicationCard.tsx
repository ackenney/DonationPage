import { Pen } from "lucide-react";
import { Button } from "./Button";


interface ApplicationCardProps {
  children: React.ReactNode;
  imageUrl: string;
  title: string;
  link: string;
}

export const ApplicationCard = ({
/*   children, */
  link,
/*   imageUrl, */

  title,
}: ApplicationCardProps) => {
  return (
    <div className="flex flex-col gap-5 bg-offWhite p-4 rounded-xl w-full max-w-96">
    {/*   <div className="rounded-xl h-56 w-full overflow-hidden">
        <img src={imageUrl} className="h-full w-full object-cover" />
      </div> */}
      <div className="flex flex-row  text-nearBlack gap-96">
        <span className="text-lg font-bold">
          {title}
        </span>
    {/*     <p className="text-sm  leading-6">
          {children}
        </p> */}
      </div>
    
    {   <div className="flex flex-col gap-16">
        <Button className="font-bold" size="sm">
        <Pen className="size-4" />
        <a href={link}>
          Apply Now
        </a>
        </Button>
      </div> }
      
    


    {/*   <Button className="text-md font-bold" size="lg">
      
      <a href="https://www.gofundme.com/">
          Donate Now
      </a>
    </Button> */}


    </div>
  );
};
