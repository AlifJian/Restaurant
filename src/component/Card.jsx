import pecelAyam from "./../assets/pecelAyam.webp";
import { Link } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";

function Card(){
    return(
        <Link>
              <div className="group shadow-md 0 p-2 rounded-md">
                <img
                  src={pecelAyam}
                  alt="Pecel Ayam"
                  className="aspect-square w-full rounded-lg bg-gray-200
                object-cover group-hover:opacity-75"
                ></img>
                <h3 className="mt-4 lg:text-sm text-xs text-gray-700">Pecel Ayam</h3>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center lg:text-base text-sm">
                    <MdOutlineStar className="text-yellow-400" />
                    <p>4.8</p>
                  </div>
                  <div>
                    <p className="mt-1 lg:text-lg text-base font-medium text-gray-900">Rp.85.000,00</p>
                  </div>
                </div>
              </div>
            </Link>
    )
}


export default Card;