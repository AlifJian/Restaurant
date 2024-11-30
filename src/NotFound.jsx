import { Helmet } from "react-helmet";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl">404 Not Found</h1>
          <h1 className="text-xl">Halaman yang anda cari tidak ada!</h1>
        </div>
      </div>
    </>
  );
}

export default NotFound;
