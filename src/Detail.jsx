import { Helmet } from "react-helmet";
import { MdOutlineStar, MdOutlineSend } from "react-icons/md";
import Galery from "./component/Galery";
import Comment from "./component/Comment";
import Footer from "./component/Footer";
import { useState } from "react";
import Header from "./component/Header";


// Images
import pakLele from "./assets/lele.jpg"
import kucing1 from "./assets/cat.jpg"
import kucing2 from "./assets/cat2.jpg"

function Detail() {
  const [comment, setComment] = useState("");
  const [elements, setElements] = useState([])
  const addComment = () => {
    setElements([...elements, <Comment nama="Pak Lele" imgSrc={pakLele} deskripsi={comment} />])
    setComment("");
  };
  const updateComment = (e) => {
    setComment(e.target.value);
  };
  return (
    <>
      <Helmet>
        <title>Pecel Ayam | Detail</title>
      </Helmet>
      <Header />
      <div className="flex justify-center items-center mt-16">
        <div className="container p-4 shadow-md">
          <div className="flex items-center justify-between">
            <p className="lg:text-5xl text-2xl font-bold hero">Pecel Ayam</p>
            <div className="flex items-center lg:text-3xl text-lg">
              <MdOutlineStar className="text-yellow-400" />
              <p>4.8</p>
            </div>
          </div>
          <Galery />
          <div>
            <p className="lg:text-lg text-base roboto lg:tracking-wide tracking-normal lg:leading-loose leading-relaxed indent-16 mt-4 p-4 text-justify">
              Pecel Ayam, salah satu kuliner khas Nusantara yang sangat populer.
              Hidangan ini terdiri dari ayam yang telah dimasak dengan bumbu
              kuning, memberikan warna keemasan yang menggugah selera. Ayamnya
              terlihat matang sempurna, dengan tekstur yang lembut dan aroma
              rempah yang khas, menjadi daya tarik utama dari sajian ini. Di
              sekitar ayam, terdapat berbagai pelengkap segar seperti irisan
              timun, tomat, dan daun selada. Sayuran segar ini tidak hanya
              menambah keindahan tampilan hidangan, tetapi juga memberikan
              keseimbangan rasa dan tekstur. Rasa renyah dari sayuran berpadu
              harmonis dengan ayam yang lembut, menciptakan pengalaman makan
              yang memuaskan. Hidangan ini dilengkapi dengan sambal khas,
              disajikan dalam mangkuk kecil. Sambal yang kaya akan cita rasa
              pedas dan gurih menjadi elemen penting dalam menikmati Pecel Ayam.
              Perpaduan rasa pedas dari sambal dengan gurihnya ayam membuat
              hidangan ini semakin nikmat dan sulit untuk dilupakan. Pecel Ayam
              sering disajikan di atas tampah bambu yang dilapisi dengan daun
              pisang, menambah kesan tradisional dan autentik. Dengan kombinasi
              rempah khas dan penyajian yang menarik, Pecel Ayam tidak hanya
              memanjakan lidah tetapi juga mencerminkan kekayaan budaya kuliner
              Indonesia.
            </p>
          </div>
          <hr />
          <div className="shadow-inner mt-4">
            <div className="max-h-[400px] min-h-[400px] overflow-auto relative">
              <Comment
                nama="Pak Lele"
                imgSrc={pakLele}
                deskripsi="Hidangan Pecel Ayam pada gambar ini tampak sangat menggugah
              selera, dengan ayam berbumbu kuning yang terlihat lembut dan kaya
              rempah khas Nusantara. Penyajian yang dilengkapi dengan sayuran
              segar seperti selada, timun, dan tomat, serta sambal pedas sebagai
              pelengkap, menjadikan hidangan ini tidak hanya lezat tetapi juga
              seimbang dalam rasa dan gizi. Tampilan tradisional menggunakan
              tampah bambu menambah nilai estetika dan menghadirkan nuansa
              autentik khas Indonesia. Hidangan ini jelas merupakan perpaduan
              sempurna antara rasa, tekstur, dan budaya kuliner lokal."
              />
              <Comment
                nama="Pria Kucing"
                imgSrc={kucing1}
                deskripsi="Hidangan Pecel Ayam ini benar-benar menggoda selera! Dengan ayam berbumbu kuning yang terlihat juicy dan kaya akan rempah, ditambah pelengkap seperti sayuran segar dan sambal pedas, membuat hidangan ini semakin nikmat. Penyajian menggunakan tampah bambu memberikan kesan tradisional yang kuat dan autentik. Ini adalah representasi sempurna dari kelezatan kuliner khas Nusantara."
              />
              <Comment
                nama="Pak Selamet"
                imgSrc={kucing2}
                deskripsi="Gambar ini benar-benar memperlihatkan betapa lezatnya Pecel Ayam. Ayam berbumbu kuning yang terlihat empuk, dipadukan dengan sambal yang pedas dan segar, menciptakan harmoni rasa yang luar biasa. Sayuran segar seperti timun dan selada tidak hanya menambah warna, tetapi juga memberikan tekstur renyah. Hidangan ini bukan hanya tentang rasa, tetapi juga keindahan budaya kuliner Indonesia yang unik."
              />
              {elements}
            </div>

            <div className="flex gap-x-8 border-t border-slate-200 p-4 items-center">
              <img
                src={pakLele}
                alt="Pak Lele"
                className="size-16 rounded-full"
              />
              <textarea
                name="coment"
                id=""
                className="w-full rounded-md border border-slate-200 p-2"
                onChange={updateComment}
                value={comment}
                placeholder="Ketik di sini...."
              ></textarea>
              <MdOutlineSend className="text-2xl" onClick={addComment}/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Detail;
