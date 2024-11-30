function Galery() {
  return (
    <>
      <div className="w-2/5 p-4 float-start">
        <div className="grid grid-cols-2 mt-4">
          <img
            src="/src/assets/pecelAyam.webp"
            alt="Pecel Ayam"
            className="h-30 border border-slate-300 shadow-inner rounded-md"
          />
          <img
            src="/src/assets/pecelAyam.webp"
            alt="Pecel Ayam"
            className="h-30 border border-slate-300 shadow-inner rounded-md"
          />
          <img
            src="/src/assets/pecelAyam.webp"
            alt="Pecel Ayam"
            className="h-30 border border-slate-300 shadow-inner rounded-md"
          />
          <div className="relative">
            <img
              src="/src/assets/pecelAyam.webp"
              alt="Pecel Ayam"
              className="h-30 border border-slate-300 shadow-inner rounded-md"
            />
            <span className="absolute top-0 bg-gradient-to-t from-black to-transparent opacity-50 w-full h-full"></span>
          </div>
        </div>
      </div>
    </>
  );
}


export default Galery;
