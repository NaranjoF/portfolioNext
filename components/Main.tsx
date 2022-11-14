import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useRouter } from "next/router";
import { en, es } from "../lang/translations";
import Link from "next/link";

export default function Main() {
  const router = useRouter();
  const { locale } = router;

  const t = locale === "en" ? en : es;

  return (
    <div id="home" className="w-full h-screen text-center xsmax:h-full">
      <div className="max-w-[1240px] w-full h-full mx-auto xs:pt-10 sm:p-2 flex justify-center items-center">
        <div className="xsmax:mt-32 xxsmax:mt-24">
          <p className="uppercase xs:text-sm sm:text-sm tracking-widest text-gray-600 select-none">
            {t.main.headerTitle}
          </p>
          <h1 className="xs:pt-2 sm:py-4 text-gray-700 select-none">
            {t.main.title} <span className="text-[#5651e5]">Facundo</span>
          </h1>
          <h1 className="xs:p-0 sm:py-4 text-gray-700 select-none">
            {t.main.subtitle}
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto select-none">
            {t.main.description}
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/naranjofacundo"
              target="_blank"
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
              title={t.link.linkedin}
              data-testid="linkedin-selector"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/NaranjoF"
              target="_blank"
              title={t.link.github}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
              data-testid="github-selector"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:facundo.naranjo00@gmail.com"
              target="_blank"
              title={t.link.mail}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
              data-testid="mail-selector"
            >
              <AiOutlineMail />
            </a>
            <a
              href={`/${t.main.language}contact`}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
              title={t.link.contact}
              data-testid="contact-selector"
            >
              <BsFillPersonLinesFill />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
