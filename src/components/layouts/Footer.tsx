export const Footer = () => {
  
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-sky-800">
      <div className="w-full lg:max-w-7xl lg:mx-auto p-8 flex flex-col gap-4 lg:gap-8">
        
        <span className="text-white text-sm font-medium">
          The Hope Network © {currentYear} 
        </span>
      </div>
    </footer>
  );
};
