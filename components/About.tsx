import Link from "next/link";
import { useRouter } from "next/router";
import { en, es } from "../lang/translations";

export default function About() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5] select-none">
            {t.about.headerTitle}
          </p>
          <h2 className="py-4 select-none">{t.about.title}</h2>
          <p className="py-2 text-gray-600 select-none">
            {t.about.description}
          </p>
          <p className="py-2 text-gray-600 select-none">
            {t.about.description2}
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              {t.about.link}
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1623520527569-fee1da87f598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="aboutImage"
          />
        </div>
      </div>
    </div>
  );
}
