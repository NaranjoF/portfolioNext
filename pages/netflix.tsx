import Image from "next/image";
import netflixClone from "../public/assets/projects/netflixBanner.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/router";
import { en, es } from "../lang/translations";
import Head from "next/head";

export default function Netflix() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  return (
    <div className="w-full">
      <Head>
        <title>Facundo Naranjo | Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-[30vh] lg:h-[40vh] xsmax:h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] xsmax:h-[60vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={netflixClone}
          alt="projectImage"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Netflix Clone</h2>
          <h3>Next JS / Styled Components / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="md:col-span-3 lg:col-span-4 text-sm">
          <p>{t.netflix.headerTitle}</p>
          <h2>{t.netflix.title}</h2>
          <p className="mb-3">{t.netflix.description}</p>
          <p className="mb-3">{t.netflix.subtitle}</p>
          <ul className="list-disc">
            <li className="ml-6 mb-3">
              <p>{t.netflix.homepage}</p>
            </li>
            <li className="ml-6 mb-3">
              <p>{t.netflix.search}</p>
            </li>
            <li className="ml-6 mb-3">
              <p>{t.netflix.notlogged}</p>
            </li>
            <li className="ml-6 mb-3">
              <p>{t.netflix.login}</p>
            </li>
          </ul>
          <div className="flex flex-row">
            <button className="px-8 py-2 mt-4 mr-8 projectsmall:px-3">
              <a
                href="https://netflix-clone-naranjof.vercel.app/"
                target="_blank"
              >
                Demo
              </a>
            </button>
            <button className="px-8 py-2 mt-4 projectsmall:px-3">
              <a
                href="https://github.com/NaranjoF/netflix-clone"
                target="_blank"
              >
                {t.netflix.code}
              </a>
            </button>
          </div>
        </div>
        <div className="col-span-4 h-max md:col-span-2 lg:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 text-ss">
          <div className="p-2">
            <p className="text-center font-bold pb-2">{t.netflix.techno}</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redux
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> SSR
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TMDB API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> S. Comp.
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">{t.netflix.back}</p>
        </Link>
      </div>
    </div>
  );
}
