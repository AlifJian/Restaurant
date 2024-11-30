import { useState } from "react";
import { formatNumber } from "../utils";

function CartCard({ total, harga, imgSrc, title }) {
  const [check, setCheck] = useState(false);
  const [style, setStyle] = useState("");
  function checkInput() {
    setCheck((prevCheck) => {
      const newCheck = !prevCheck;
      total(newCheck ? harga : -harga, newCheck ? 1 : -1);
      setStyle(newCheck ? "bg-blue-300 opacity-70" : "");
      return newCheck;
    });
  }

  return (
    <>
      <div
        className={`w-full min-h-8 shadow-md p-4 robot ${style}`}
        onClick={checkInput}
      >
        <div>
          <p>{title}</p>
          <hr />
        </div>
        <div className="flex justify-between items-center">
          <img src={imgSrc} alt={title} className="lg:h-60 h-32 aspect-auto" />
          <input
            type="checkbox"
            name=""
            id=""
            checked={check}
            className="size-8 p-2 checked:bg-amber-600 text-amber-600 lg:block hidden"
          />
        </div>
        <div>
          <p className="mt-1 lg:text-lg text-base font-medium text-gray-900">
            Rp.{formatNumber(harga)},00
          </p>
        </div>
      </div>
    </>
  );
}

export default CartCard;
