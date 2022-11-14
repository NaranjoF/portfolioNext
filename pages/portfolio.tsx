import Image from "next/image";
import portfolio from "../public/assets/projects/portfolioBanner.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/router";
import { en, es } from "../lang/translations";
import Head from "next/head";

export default function Portfolio() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  return (
    <div className="w-full">
      <Head>
        <title>Facundo Naranjo | Portfolio Web</title>
        <link rel="icon" href="/logofn.ico" />
      </Head>
      <div className="w-full h-[30vh] lg:h-[40vh] xsmax:h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] xsmax:h-[60vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={portfolio}
          alt="projectImage"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Portfolio Web</h2>
          <h3>Next JS / TypeScript / Tailwind </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="md:col-span-3 lg:col-span-4 text-sm">
          <p>{t.portfolio.headerTitle}</p>
          <h2>{t.portfolio.title}</h2>
          <p className="mb-3">{t.portfolio.description}</p>
          <p className="mb-3">{t.portfolio.subtitle}</p>
          <ul className="list-disc">
            <li className="ml-6 mb-3">
              <p>{t.portfolio.homepage}</p>
            </li>
            <li className="ml-6 mb-3">
              <p>{t.portfolio.about}</p>
            </li>
            <li className="ml-6 mb-3">
              <p>{t.portfolio.skills}</p>
            </li>
            <li className="ml-6 mb-3">
              <p>{t.portfolio.projects}</p>
            </li>
            <li className="ml-6 mb-3">
              <p>{t.portfolio.projectPage}</p>
            </li>
            <li className="ml-6 mb-3">
              <p>{t.portfolio.contact}</p>
            </li>
          </ul>
          <div className="flex flex-row">
            <a
              href="https://github.com/NaranjoF/portfolioNext"
              target="_blank"
              data-testid="code-button"
              className="px-8 py-2 mt-4 projectsmall:px-3 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white mr-5"
            >
              {t.portfolio.code}
            </a>
          </div>
        </div>
        <div className="col-span-4 h-max md:col-span-2 lg:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 text-ss">
          <div className="p-2">
            <p className="text-center font-bold pb-2">{t.portfolio.techno}</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redux
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Jest
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Cypress
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> SendGrid
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer" data-testid="back-button">
            {t.portfolio.back}
          </p>
        </Link>
      </div>
    </div>
  );
}
