import React from 'react';

function Header() {
  return (
    <div className="text-black">
      <section className='md:flex md:justify-start md:mt-5 md:ml-5 sm:justify-center sm:mt-5 sm:ml-5 sticky z-10 px-4'>
        <div className="text-center">
          <h1 className='w-full text-4xl font-semibold flex-1 font tracking-widest lg:text-6xl md:text-5xl'>
            <span className='text-gradient'>JULIUS AALTO.</span>
          </h1>
          <p className='mt-1 subpixel-antialiased tracking-widest'>Welcome to my React website!</p>
        </div>
      </section>
    </div>
  );
}

export default Header;