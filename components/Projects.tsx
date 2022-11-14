import Image from "next/image";
import Link from "next/link";
import netflixClone from "../public/assets/projects/netflixClone.png";
import { useRouter } from "next/router";
import { en, es } from "../lang/translations";

export default function Projects() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          {t.projects.headerTitle}
        </p>
        <h2 className="py-4">{t.projects.title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={netflixClone}
              alt="projectImage"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center projectsmall:text-xs">
                Netflix Clone
              </h3>
              <p className="pb-4 pt-2 text-white text-center projectsmall:text-xs">
                Next Js, Typescript, Styled Components, SSR and Redux
              </p>
              <Link href="/netflix">
                <p
                  className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer projectsmall:text-xs"
                  data-testid="project-button-1"
                >
                  {t.projects.button}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
