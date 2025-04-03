interface FAQItemProps {
  question: string;
  children: React.ReactNode; 
}

export const FAQItem = ({
  question,
  children,
}: FAQItemProps) => {
  return (
    <article className="flex flex-col gap-2">
      <span className="text-lg text-sky-900 font-bold">
        {question}
      </span>
      <p className="text-sm text-TextColor2 leading-6">
        {children}
      </p>
    </article>
  );
};
