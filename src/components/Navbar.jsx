'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { Home, Clock, TrendingUp } from "lucide-react";





const Navbar=() => {
      const PathName = usePathname()
    const links=(
        <>
                <li><Link className={PathName === '/' ? 'bg-[#244D3F] text-white' : ''} href="/">  <Home size={16} /> Home </Link></li>
                <li><Link className={PathName === '/timeline' ? 'bg-[#244D3F] text-white' : ''} href="/"> <Clock size={16}/> Timeline </Link></li>
                <li><Link className={PathName === '/stats' ? 'bg-[#244D3F] text-white' : ''} href="/"> <TrendingUp size={16}/> Stats </Link></li>
        </>
    )

    return (
        <div className="">
            <div className="navbar bg-base-100  max-w-[1600px] mx-auto">
         
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">

       {links}
                            
      </ul>
                    </div>
                    
   <Image src="/assets/KeenKeeper.svg"
                        alt="KeenKeeper"
                        width={131}
                        height={31}
                    />
                </div>
                
  <div className="navbar-end  hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-2 ">

     {links}
                        
    </ul>
  </div>

</div>
        </div>
    );
};

export default Navbar;