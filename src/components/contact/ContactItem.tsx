interface ContactItemProps {
  heading: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const ContactItem = ({
  heading,
  icon,
  children,
}: ContactItemProps) => {
  return (
    <div className="flex gap-x-6 ">
      {icon}
      <div className="flex flex-col gap-y-1">
        <h3 className="text-TextColor1">{heading}</h3>
        {children}
      </div>
    </div>
  );
};
