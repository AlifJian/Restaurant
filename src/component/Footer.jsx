import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white min-h-8 p-4 opacity-75 shadow-inner mt-16">
        <p className="text-center font-bold">Contact</p>
      <div className="flex justify-center items-center min-h-8 gap-x-10">
        <a href="">
          <FaFacebook className="text-2xl" />
        </a>
        <a href="">
          <FaInstagram className="text-2xl" />
        </a>
        <a href="">
          <FaLinkedin className="text-2xl" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
