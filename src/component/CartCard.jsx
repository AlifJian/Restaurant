import { Helmet } from "react-helmet";
import PecelAyam from "./../assets/pecelAyam.webp";

function CartCard({terpilih}) {
  return (
    <>
    <Helmet>
      <title>Restaurant | Cart</title>
    </Helmet>
      <div className="w-full min-h-8 shadow-md p-4 roboto">
        <div>
          <p>Pecel Ayam {terpilih}</p>
          <hr />
        </div>
        <div className="flex justify-between items-center">
          <img src={PecelAyam} alt="" className="h-60" />
          <input
            type="checkbox"
            name=""
            id=""
            checked={terpilih}
            className="size-8 p-2 checked:bg-amber-600 text-amber-600"
          />
        </div>
        <div>
          <p className="mt-1 lg:text-lg text-base font-medium text-gray-900">
            Rp.85.000,00
          </p>
        </div>
      </div>
    </>
  );
}

export default CartCard;