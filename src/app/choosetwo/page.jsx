"use client";

import Combinatorics from "../components/combinatorics";
// import CombinatoricsComponent from "../components/CombinatoricsComponent ";

const page = () => {


  return (
    <>
      <header className="mx-auto flex justify-between w-full py-2 px-5 bg-slate-500 sticky top-0 left-0 z-10 shadow-sm ">
        <h1 className="flex-1 font-bold text-center text-xl text-white ">Choose Two, Unleash the Power of Combinations!</h1>
      </header>

      {/* <CombinatoricsComponent /> */}
      <Combinatorics />
    </>
  )
}

export default page