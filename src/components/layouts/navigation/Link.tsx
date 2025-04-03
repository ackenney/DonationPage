import { cx } from "class-variance-authority";

interface LinkProps {
  href: string;
  label: string;
  currentHash: string;
}

export const Link = ({
  href,
  label,
  currentHash,
}: LinkProps) => {
  return (
    <a href={href} className={cx(
      "px-8 lg:px-3 xl:px-6 py-2 text-sm xl:text-base text-TextColor2 text-center text-nowrap hover:text-black transition-colors",
      (href === currentHash)
      ? "text-black font-bold" : "text-neutral-600",
    )}>
      {label}
    </a>
  );
};
