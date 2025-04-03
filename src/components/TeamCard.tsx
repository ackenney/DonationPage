
interface TeamCardProps {
  children: React.ReactNode;
  imageUrl: string;
  title: string;
}

export const TeamCard = ({
  children,
  imageUrl,

  title,
}: TeamCardProps) => {
  return (
    <div className="flex flex-col gap-1 bg-white p-4 rounded-xl w-full max-w-96">
      <div className="rounded-xl h-56 w-full overflow-hidden">
        <img src={imageUrl} className="h-full w-40 object-cover" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm font-bold">
          {title}
        </span>
        <p className="text-sm leading-1">
          {children}
        </p>
      </div>
      <div className="flex flex-col">
      
      </div>

    </div>
  );
};
