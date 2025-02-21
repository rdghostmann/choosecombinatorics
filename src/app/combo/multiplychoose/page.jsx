"use client";

import MultiplyCombinatorics from '../_components/MultiplyCombinatorics'
import useAuthMiddleware from '../../../app/middleware/middleware';

const page = () => {
  useAuthMiddleware();


  return (
    <>
    <header>
      <h3 className="text-center text-xl text-bg-slate-800">Multiplication Combinatorics</h3>
    </header>
      <MultiplyCombinatorics />
    </>
  )
}

export default page