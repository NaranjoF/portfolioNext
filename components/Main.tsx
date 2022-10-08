import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useRouter } from "next/router";
import { en, es } from "../lang/translations";

export default function Main() {
  const router = useRouter();
  const { locale } = router;

  const t = locale === "en" ? en : es;

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 select-none">
            {t.main.headerTitle}
          </p>
          <h1 className="py-4 text-gray-700 select-none">
            {t.main.title} <span className="text-[#5651e5]">Facundo</span>
          </h1>
          <h1 className="py-4 text-gray-700 select-none">{t.main.subtitle}</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto select-none">
            {t.main.description}
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
