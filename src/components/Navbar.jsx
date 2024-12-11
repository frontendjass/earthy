import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Listen for screen size changes
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMenuOpen(true); // Show menu on large screens
      } else {
        setIsMenuOpen(false); // Hide menu on small screens
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav className='flex justify-between items-center px-4 h-14 bg-kelp-800 rounded-b-2xl'>
        <span className='uppercase font-quicksand font-semibold text-2xl text-mosswood-200'>
          Earthy
        </span>
        {isMenuOpen && (
          <div className='w-screen'>
            <ul
              className={`
                absolute left-0 top-10 
                flex justify-center items-center 
                w-screen h-screen 
                bg-kelp-800 text-mosswood-200 
                font-source-sans-3 text-xl 
                uppercase text-center
                sm:static sm:bg-transparent
                sm:w-auto sm:h-auto
`}
            >
              <div className='flex flex-col sm:flex-row sm:gap-4'>
                <li>
                  <a href='#home'>Home</a>
                </li>
                <li>
                  <a href='#about'>About</a>
                </li>
                <li>
                  <a href='#services'>Services</a>
                </li>
                <li>
                  <a href='#contact'>Contact</a>
                </li>
              </div>
            </ul>
          </div>
        )}
        <button
          className='sm:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className='flex flex-col gap-1'>
            <div className='h-[3px] w-6 bg-mosswood-200'></div>
            <div className='h-[3px] w-6 bg-mosswood-200'></div>
            <div className='h-[3px] w-6 bg-mosswood-200'></div>
          </div>
        </button>
      </nav>
    </>
  );
}
