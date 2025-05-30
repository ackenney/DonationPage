import { cx } from "class-variance-authority";


import { Link } from "./Link";
import { Button } from "../../Button";
import { navigationItems } from "./items";

import { useHash } from "../../../hooks/useHash";

export const MobileMenu = ({
  isOpen,
}: {
  isOpen: boolean,
}) => {
  const currentHash = useHash();

  return (
    <nav className={cx(
      "z-40 w-full px-8 py-2 lg:hidden flex flex-col border-b border-offWhite bg-white transition",
      { "-translate-y-full": !isOpen },
    )}>
      {navigationItems.map(({ label, href }) => (
        <Link key={label} href={href} label={label} currentHash={currentHash} />
      ))}
      <div className="py-2 flex flex-col gap-2">
        <Button className="font-bold">
    
          <a href="https://cash.app/$MaroonStrategy/" >
                Donate Now
            </a>
        </Button>
      </div>
    </nav>
  );
};

export const Menu = () => {
  const currentHash = useHash();

  return (
    <nav className="px-4 hidden lg:flex">
      {navigationItems.map(({ label, href }) => (
        <Link key={label} href={href} label={label} currentHash={currentHash} />
      ))}
    </nav>
  );
};
