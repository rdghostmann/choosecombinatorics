"use client";

import ProductPaired from "../_components/ProductPaired";
import useAuthMiddleware from '../../../app/middleware/middleware';


const page = () => {
  useAuthMiddleware();


  return (
    <>
      <header>
        <h3 className="text-center text-xl text-bg-slate-800">Product Paired Combinatorics</h3>
      </header>

      <ProductPaired />
    </>
  )
}

export default page