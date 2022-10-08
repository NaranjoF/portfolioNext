import Image from "next/image";
import netflixClone from "../public/assets/projects/netflixBanner.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/router";
import { en, es } from "../lang/translations";

export default function Netflix() {
  const router = useRouter();
  const { locale } = router;

  const t = locale === "en" ? en : es;

  return (
    <div className="w-full">
      <div className="w-full h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
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
          <p>Project</p>
          <h2>{t.netflix.title}</h2>
          <p className="mb-3">
            This netflix clone was created in NEXT JS, using FIREBASE to perform
            the login function, STYLED COMPONENTS to style the project, and THE
            MOVIE DATABASE API to consume movie poster images.
          </p>
          <p className="mb-3">-This clone has:</p>
          <ul className="list-disc">
            <li className="ml-6 mb-3">
              <p>
                HOMEPAGE: Here we have the classic netflix homepage, where we
                have a movie trailer, which when it ends shows a wallpaper of
                the movie, we also have a function to repeat the trailer again
                and we also have a trailer mute function (trailer that changes
                every time we update the page and has its corresponding 'more
                info' section where we can see a modal with the information
                about the movie, the actors and recommended movies, just as it
                appears on netflix), then inside the homepage we have the
                sliders section, where we can see several movies of different
                categories, we also have a fictitious 'coming soon' section
                where we can appreciate a slider with several movie posters,
                this is not found on netflix but it was a good idea to consume
                data from an api to do server side rendering. finally we have a
                footer, all these features of the homepage have their
                corresponding responsive design so they adapt to different
                devices.
              </p>
            </li>
            <li className="ml-6 mb-3">
              <p>
                SEARCH SECTION: This section behaves the same as netflix, when
                entering a string the search engine will return the movies that
                match or contain part of the entered string, then we have its
                corresponding footer. Like the homepage, all of this is
                responsive.
              </p>
            </li>
            <li className="ml-6 mb-3">
              <p>
                Not logged yet page: This section contains two forms where we
                can enter our email and we will be redirected to the login page
                where we can either register or log in, then we have some
                features that explain what we can do with nextflix 'enjoy on
                your tv', 'download your shows to watch offline' and etc, then
                we have a FAQ section where we can click on each question and an
                answer will appear, then we have its corresponding footer. Like
                the homepage and the search section, all of this is responsive.
              </p>
            </li>
            <li className="ml-6 mb-3">
              <p>
                LOGIN PAGE: This section contains a form and a footer, in the
                form we can enter our email and password to view the home page,
                if we are not registered, we click on sign up now and enter the
                email with which we want to register and a password of 6
                characters minimum and 60 maximun
              </p>
            </li>
          </ul>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4">Code</button>
        </div>
        <div className="col-span-4 h-max md:col-span-2 lg:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 text-ss">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
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
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}
