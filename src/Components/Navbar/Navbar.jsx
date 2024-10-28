import { useState } from "react";
import Link from "../Link/Link";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/About", name: "About" },
    { id: 3, path: "/Contact", name: "Contact" },
    { id: 4, path: "/Blogs", name: "Blogs" },
    { id: 5, path: "/products", name: "Products" },
  ];

  return (
    <nav className="flex flex-col lg:flex-row justify-between lg:items-center  gap-5 relative pt-8 mb-20">
      <div className="flex items-center gap-4">
        <div
          onClick={() => setOpen(!open)}
          className="hover:bg-slate-800 p-2 rounded-lg text-2xl lg:hidden"
        >
          {open ? <MdClose></MdClose> : <FaBars></FaBars>}
        </div>
        <h3 className="text-3xl uppercase">Logo</h3>
      </div>
      <div className={`
        ${open ? '' : '-top-[700px]'}
        duration-1000 bg-gradient-to-t from-gray-800 lg:from-transparent to-[#1D232A] lg:to-transparent lg:bg-transparent absolute lg:static top-14 w-full lg:w-auto`}>
        <ul className={`flex flex-col lg:flex-row gap-5 lg:gap-8`}>
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
