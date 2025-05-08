import { useState } from "react";
import { cx } from "class-variance-authority";
import {MenuIcon, X } from "lucide-react";

import { Button } from "../Button";
import { Menu, MobileMenu } from "./navigation/Menu";

/* import img1 from ".//../..//../public/images/MS_Logo_Horizontal_Salmon.png"
 */

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="z-50 fixed top-0 left-0 w-full flex flex-col lg:flex-row lg:border-b lg:border-neutral-200 lg:bg-offWhite">
        <div className="z-50 w-full lg:max-w-7xl lg:mx-auto">
          <div className="px-8 py-4 flex justify-between items-center border-b border-neutral-200 lg:border-none bg-offWhite">
            {/* <a href="#home" className="text-xl text-nearBlack lg:text-2xl font-bold">
            Maroon Strategy
            </a> */}
            <Button
              onClick={() => setIsOpen(!isOpen)}
              size="icon"
              variant="ghost"
              className="relative lg:hidden"
            >
              <MenuIcon className={cx(
                "size-5 absolute transition",
                { "scale-0": isOpen },
              )} />
              <X className={cx(
                "size-5 absolute transition",
                { "scale-0": !isOpen },
              )} />
            </Button>
            <Menu />
            <div className="hidden lg:flex lg:gap-2">
              
              
              <Button className="text-md font-bold">
  
                <a href="https://www.gofundme.com/">
                Donate Now 
                </a>
                </Button>
  


            </div>
          </div>
        </div>
        <MobileMenu isOpen={isOpen} />
      </header>
      <div className={cx(
        "z-40 lg:hidden fixed w-full h-full transition-colors",
        !isOpen ? "hidden" : "block bg-nearBlack/30"
      )}>
      </div>
    </>
  );
};
