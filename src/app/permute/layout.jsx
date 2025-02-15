// PageLayout.jsx
import React from 'react';
import Link from 'next/link';

const PageLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="mx-auto flex flex-col justify-between w-full py-2 px-5 mb-4 bg-stone-500 sticky top-0 left-0 z-10 shadow-sm">
        <h1 className="flex-1 font-bold text-center text-xl text-white">Unleash the Power of Combo!</h1>
      </header>
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
