"use client";
import PairedCombinatorics from '../_components/PairedCombinatorics'
import useAuthMiddleware from '../../../app/middleware/middleware';



const page = () => {
  useAuthMiddleware();


  return (
    <>
      <header>
        <h3 className="text-center text-xl text-bg-slate-800">Adjacent Paired Combinatorics</h3>
      </header>
      <PairedCombinatorics />
    </>
  )
}

export default page