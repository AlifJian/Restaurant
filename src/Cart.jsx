import CartCard from "./component/CartCard";
import Header from "./component/Header";
import Footer from "./component/Footer";

function Cart() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col rounded-md mt-4 gap-y-10 p-16 roboto">
        <CartCard terpilih={true} />
        <CartCard />
      </div>
      <div className="fixed bottom-0 px-16 w-full z-10">
        <div className="shadow-md mb-8 p-4 border border-gray-200 bg-white">
          <div className="mb-4">
            <p>Selected : 1</p>
          </div>
          <div className="flex justify-between">
            <div className="flex-col items-center">
              <p>Total</p>
              <p>Rp.85.000,00</p>
            </div>
            <button className="bg-amber-600 text-white rounded-md p-2"> Checkout </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
