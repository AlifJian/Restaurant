import Card from "./component/Card";
import Header from "./component/Header";
import { Helmet } from "react-helmet";
import Footer from "./component/Footer";

// Images
import pecelAyam from "./assets/pecelAyam.webp"
import bebek from "./assets/bebek.webp"
import ikanLele from "./assets/IkanLele.webp"
import iceTea from "./assets/IceTea.webp"
import mactha from "./assets/Matcha.webp"


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
              imgSrc={pecelAyam}
              title="Pecel Ayam"
              harga="85000"
              rating="4.8"
            />
            <Card
              imgSrc={bebek}
              title="Bebek Panggang"
              harga="100000"
              rating="4.8"
            />
            <Card
              imgSrc={ikanLele}
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
              imgSrc={iceTea}
              title="Es Teh"
              harga="5000"
              rating="5.0"
            />
            <Card
              imgSrc={mactha}
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
