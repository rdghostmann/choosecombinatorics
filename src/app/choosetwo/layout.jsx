import Link from "next/link";


export const metadata = {
  title: "Choose 2 Combinatorics Generator",
  manifest: "/manifest.json",
  description: "Join the number hunting adventure and discover how many pairs you can match in our exciting game.",
  keywords: " generated sequence, number matching game, number checker, interactive table, observation skills, focus and concentration, engaging game, fun game, number hunting, strategy game, memory improvement, cognitive skills, number pairs, matching numbers, table game, number finder, brain game, time passer, addictive game"
};
export default function Layout({ children }) {
  return (

    <main>
      <header className="mx-auto flex flex-col justify-between w-full py-2 px-5 mb-4 bg-slate-500 sticky top-0 left-0 z-10 shadow-sm ">
        <nav className="w-full flex items-center justify-center border-black" >
          <Link className="grid place-items-center m-3 w-[38px] px-2 py-1 rounded-lg border border-gray-500 focus:border-2 focus:border-gray-800 bg-gray-300" href="/choosetwo" >➕ <span className="hidden">Combinatorics</span></Link>
          <Link className="grid place-items-center m-3 w-[38px] px-2 py-1 rounded-lg border border-gray-500 focus:border-2 focus:border-gray-800 bg-gray-300" href="/choosetwo/negativechoose" >➖ <span className="hidden">Combinatorics</span></Link>
          <Link className="grid place-items-center m-3 w-[38px] px-2 py-1 rounded-lg border border-gray-500 focus:border-2 focus:border-gray-800 bg-gray-300" href="/choosetwo/multiplychoose" >❌ <span className="hidden">Combinatorics</span></Link>
        </nav>
        <h1 className="flex-1 font-bold text-center text-xl text-white  ">Unleash the Power of Combinatorics!</h1>
      </header>
      {children}
    </main>


  );
}
