"use client";

import NegativePaired from "../_components/NegativePaired";
import useAuthMiddleware from '../../../app/middleware/middleware';


const page = () => {
  useAuthMiddleware();


  return (
    <>
      <header>
        <h3 className="text-center text-xl text-bg-slate-800">Negative Paired Combinatorics</h3>
      </header>

      <NegativePaired />
    </>
  )
}

export default page