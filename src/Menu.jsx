import Card from "./component/Card";
import Header from "./component/Header";
import { Helmet } from "react-helmet";
import Footer from "./component/Footer";

function Menu() {
  return (
    <>
      <Helmet>
        <title>{`Restaurant | Menu`}</title>
      </Helmet>
      <Header selected="menu" />
      <div className="flex-col flex justify-center items-center">
        <div className="container p-4 mt-16">
          <h1 className="text-2xl font-medium px-6 lg:px-10">Makanan : </h1>
          <div className="min-h-80 rounded-md mt-4 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 lg:p-8 p-4">
            <Card
              imgSrc="src/assets/pecelAyam.webp"
              title="Pecel Ayam"
              harga="85000"
              rating="4.8"
            />
            <Card
              imgSrc="src/assets/bebek.webp"
              title="Bebek Panggang"
              harga="100000"
              rating="4.8"
            />
            <Card
              imgSrc="src/assets/IkanLele.webp"
              title="Pecel Lele"
              harga="20000"
              rating="4.5"
            />
          </div>
        </div>
        <div className="container p-4 mt-16">
          <h1 className="text-2xl font-medium px-6 lg:px-10">Minuman : </h1>
          <div className="min-h-80 rounded-md mt-4 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 lg:p-8 p-4">
            <Card
              imgSrc="src/assets/IceTea.webp"
              title="Es Teh"
              harga="5000"
              rating="5.0"
            />
            <Card
              imgSrc="src/assets/Matcha.webp"
              title="Matcha"
              harga="10000"
              rating="4.7"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Menu;
