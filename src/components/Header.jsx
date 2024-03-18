import React from 'react';

function Header() {
  return (
    <div className="text-white">
      <section className='flex justify-start mt-5 ml-5'>
        <div className="text-center">
          <h1 className='w-full text-4xl font-semibold flex-1 font tracking-widest'>
            <span className='text-gradient'>JULIUS AALTO.</span>
          </h1>
          <p className='mt-1 subpixel-antialiased tracking-widest'>Welcome to my React website!</p>
        </div>
      </section>
    </div>
  );
}

export default Header;