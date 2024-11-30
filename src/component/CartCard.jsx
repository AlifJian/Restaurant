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
        <div className="flex justify-between items-center">
          <p>{title}</p>
          <input
            type="checkbox"
            name=""
            id=""
            checked={check}
            className="lg:size-8 size-6 p-2 checked:bg-amber-600 text-amber-600"
          />
        </div>
          <hr />
        <div className="flex justify-between items-center">
          <img src={imgSrc} alt={title} className="lg:h-60 h-32 aspect-auto" />
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
