import { MdLocalShipping } from "react-icons/md";
import Footer from "./component/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
function Order() {
  return (
    <>
      <Helmet>
        <title>Orderan</title>
      </Helmet>
      <div className="flex justify-center mt-8 items-center">
        <div className="container flex shadow-md min-h-[600px] items-center justify-center">
          <div className="flex flex-col items-center">
            <MdLocalShipping className="text-8xl animate-bounce" />
            <p className="text-2xl font-bold">Orderan Sedang dikirim......</p>
            <Link to="/cart">
              <button className="p-2 bg-amber-600 text-white mt-8 rounded-md">
                <p>Kembali</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Order;
