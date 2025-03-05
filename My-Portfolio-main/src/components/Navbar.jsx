import React from 'react';

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='bg-[#0a0a0a] text-white px-8 md:px-16 lg:px-24 shadow-lg font-bold'>
      <div className='container py-3 flex justify-center md:justify-between items-center'>
        <div className='text-2xl font-extrabold hidden md:inline text-[#00e6e6] tracking-widest font-[Montserrat]'>
          Pinet
        </div>
        <div className='space-x-6'>
          {['Home', 'About Me', 'Services', 'Projects', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(/\s/g, ''))}
              className='hover:text-[#00e6e6] transition-all duration-300 hover:scale-105'
            >
              {item}
            </button>
          ))}
        </div>
        <button 
          className='bg-[#00e6e6] text-black hidden md:inline px-5 py-2 rounded-full 
          transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_15px_#00e6e6]'
        >
          Connect Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
