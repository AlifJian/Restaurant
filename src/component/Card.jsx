import { Link } from "react-router-dom";
import { MdOutlineStar, MdAddBox } from "react-icons/md";
import { formatNumber } from "../utils";

function Card({ imgSrc, title, harga, rating }) {
  return (
    <Link to="/detail">
      <div className="group shadow-md 0 p-2 rounded-md">
        <img
          src={imgSrc}
          alt={title}
          className="aspect-square w-full rounded-lg bg-gray-200
                object-cover group-hover:bg-amber-300 group-hover:opacity-75 transition-all ease-in"
        ></img>
        <h3 className="mt-4 lg:text-sm text-xs text-gray-700">{title}</h3>
        <div className="flex items-center justify-between ">
          <div className="flex items-center lg:text-base text-sm">
            <MdOutlineStar className="text-yellow-400" />
            <p>{rating}</p>
          </div>
          <div>
            <p className="mt-1 lg:text-lg text-xs font-medium text-gray-900">
              Rp.{formatNumber(harga)},00
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="/cart">
            <button className="p-2 bg-amber-600 text-white rounded-md mt-4 flex justify-around items-center gap-x-4">
              <p className="lg:block hidden">Masukkan ke Keranjang</p> <MdAddBox className="text-2xl"/>
            </button>
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default Card;
