export const Footer = () => {
  
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-nearGreen">
      <div className="w-full lg:max-w-7xl lg:mx-auto p-8 flex flex-col gap-4 lg:gap-8">
        
        <span className="text-offWhite text-sm font-medium">
        Maroon Strategy © {currentYear} 
        </span>
      </div>
    </footer>
  );
};
