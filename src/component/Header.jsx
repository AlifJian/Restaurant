import logo from "./../assets/logo.svg";
import { MdOutlineSearch } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";

function Header({ selected }) {
  return (
    <header className="p-4 w-full shadow-md sticky top-0 backdrop-blur bg-white opacity-75">
      <nav className="flex justify-between w-full">
        <div>
          <ul className="flex justify-between items-center gap-8">
            <li>
              <Link to="/">
                <div className="flex justify-around items-center font-bold">
                  <img
                    src={logo}
                    alt="Spoon and Fork"
                    className="w-[32px] h-[32px]"
                  />
                  Turok
                </div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <p
                  className={` ${selected == "home" ? "text-amber-600" : ""} `}
                >
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link to="/menu">
                <p
                  className={` ${selected == "menu" ? "text-amber-600" : ""} `}
                >
                  Menu
                </p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-around items-center lg:gap-6 gap-3">
          <button className="rounded-full border border-slate-200 p-2">
            <MdOutlineSearch className="lg:text-2xl" />
          </button>
          <Link to="/cart">
          <button className="rounded-full border border-slate-200 p-2 bg-amber-600 relative">
            <MdOutlineShoppingBag className="lg:text-2xl text-white" />
            <span className="absolute top-0 right-0 size-3 bg-black text-white text-[8px] rounded-full">
              2
            </span>
          </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
