import { Pen } from "lucide-react";
import { Button } from "./Button";


interface ApplicationCardProps {
  children: React.ReactNode;
  imageUrl: string;
  title: string;
}

export const ApplicationCard = ({
  children,
  imageUrl,

  title,
}: ApplicationCardProps) => {
  return (
    <div className="flex flex-col gap-4 bg-white p-4 rounded-xl w-full max-w-96">
      <div className="rounded-xl h-56 w-full overflow-hidden">
        <img src={imageUrl} className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col  text-TextColor2 gap-1">
        <span className="text-lg font-bold">
          {title}
        </span>
        <p className="text-sm  leading-6">
          {children}
        </p>
      </div>
      <div className="flex flex-col">
      
      </div>
      <Button className="font-bold" size="sm">
        <Pen className="size-4" />
        Apply Now
      </Button>
    </div>
  );
};
