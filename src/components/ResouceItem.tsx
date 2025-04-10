interface ResourceItemProps {
  question: string;
  children: React.ReactNode; 
}

export const ResourceItem = ({
  question,
  children,
}: ResourceItemProps) => {
  return (
    <article className="flex flex-col gap-2">
      <span className="text-lg text-navy font-bold">
        {question}
      </span>
      <p className="text-sm text-nearBlack leading-6">
        {children}
      </p>
    </article>
  );
};
