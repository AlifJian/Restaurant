import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import avatar from "../assets/avatar.webp";
import pecelAyam from "../assets/pecelAyam.webp";
function Hero() {
  return (
    <>
      <section className="lg:flex hidden min-h-screen hero p-4 mt-8 justify-between">
        <div className="flex-col">
          <div className="font-extrabold lg:text-7xl p-4">
            <div className="lg:block flex">
              <h1 className="mb-8">
                Harga <span className="text-amber-600">Murah,</span>
              </h1>
              <h1 className="mb-8">Masalah Rasa</h1>
              <h1>
                Nggk Ada <span className="text-amber-600">Lawan</span>
              </h1>
            </div>
          </div>
          <div className="roboto text-sm font-normal p-4 mt-16">
            <span className="w-[32px] h-[16px] inline-block border-t-2 border-black"></span>
            <p className="text-slate-400">
              Makanannya sangat enak. Tempatnya bersih,<br></br>Bagus dan sangat
              aesthetic
            </p>
            <div className="mt-8 flex gap-x-4 items-center">
              <img src={avatar} alt="" className="size-14 rounded-full" />
              <div className="flex-col font-bold">
                <h4>Rahan Sukamaju</h4>
                <ul className="grid grid-flow-col gap-x-2">
                  <li>
                    <MdOutlineStar className="text-yellow-400" />
                  </li>
                  <li>
                    <MdOutlineStar className="text-yellow-400" />
                  </li>
                  <li>
                    <MdOutlineStar className="text-yellow-400" />
                  </li>
                  <li>
                    <MdOutlineStar className="text-yellow-400" />
                  </li>
                  <li>
                    <MdOutlineStarHalf className="text-yellow-400" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col w-[400px] roboto">
          <div className="p-4" id="">
            <div className="flex justify-around">
              <h3 className="text-xl font-bold">Pecel Ayam</h3>
              <div className="flex items-center">
                <MdOutlineStar className="text-yellow-400" />
                <p>4.8</p>
              </div>
            </div>
            <img
              src={pecelAyam}
              alt="Pecel ayam"
              width={`400px`}
              height={`400px`}
            />
            <div className="mt-4 text-sm">
              <span className="w-[32px] h-[16px] inline-block border-t-2 border-black"></span>
              <p className="text-wrap text-slate-700">
                Ayam utuh digoreng dengan sepenuh hati, bumbu khas nusantara
                pada abad ke 19. Dengan rasa khas yang unik membuat Pecel Ayam
                jadi pilihan terbaik.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:hidden flex min-h-screen p-4 mt-8">
        <div className="text-2xl hero">
          <h1 className="">
            Harga <span className="text-amber-600">Murah,</span> Masalah Rasa
          </h1>
          <h1>
            Nggk Ada <span className="text-amber-600">Lawan</span>
          </h1>
          <div className="">
            <span className="w-[32px] h-[16px] inline-block border-t-2 border-black"></span>
            <p className="text-xs text-justify indent-16">
              Resto Turoq adalah destinasi kuliner yang menghadirkan cita rasa
              khas Indonesia dengan menu andalannya seperti pecal ayam, pecal
              lele, dan bebek panggang. Mengusung konsep tradisional, Turoq
              menyajikan pengalaman makan yang autentik dengan bumbu
              rempah-rempah asli Nusantara. Setiap hidangan diolah dengan
              bahan-bahan segar, dipadukan dengan sambal khas yang pedas dan
              gurih, menciptakan harmoni rasa yang memanjakan lidah. Suasana
              resto yang hangat dengan nuansa budaya lokal semakin menambah
              kenikmatan bagi para pengunjung yang ingin menikmati masakan
              tradisional.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
