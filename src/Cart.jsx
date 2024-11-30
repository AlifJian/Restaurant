import CartCard from "./component/CartCard";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { useState } from "react";
import { Helmet } from "react-helmet";

import {formatNumber} from "./utils"


// Images
import pecelAyam from "./assets/pecelAyam.webp"
import bebek from "./assets/bebek.webp"

function Cart() {
  const [total, setTotal] = useState(0);
  const [selected, setSelected] = useState(0)

  const updateTotal = (harga, select) => {
    setTotal(total + harga)
    setSelected(selected + select)
  }


  return (
    <>
      <Helmet>
        <title>Restaurant | Cart</title>
      </Helmet>
      <Header />
      <div className="min-h-screen flex flex-col rounded-md mt-4 gap-y-10 lg:p-16 p-8 roboto">
        <CartCard total={updateTotal} harga={85000} title="Pecel Ayam" imgSrc={pecelAyam} />
        <CartCard total={updateTotal} harga={100000} title="Bebek Panggang" imgSrc={bebek} />
      </div>
      <div className="fixed bottom-0 px-16 w-full z-10">
        <div className="shadow-md mb-8 p-4 border border-gray-200 bg-white">
          <div className="mb-4">
            <p>Selected : {selected}</p>
          </div>
          <div className="flex justify-between">
            <div className="flex-col items-center">
              <p>Total</p>
              <p>Rp.{formatNumber(total)},00</p>
            </div>
            <button className="bg-amber-600 text-white rounded-md p-2">
              Order Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}


export default Cart;
