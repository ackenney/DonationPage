import { twMerge } from "tailwind-merge";

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export const Section = ({
  id,
  className,
  children,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={twMerge(
        "scroll-my-16 bg-offWhite",
        className,
    )}>
      {children}
    </section>
  );
};
