import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useAppSelector, useAppDispatch } from "../hooks";
import { setnavbarState } from "../slices/navbarSlice";
import { useEffect } from "react";
import { setnavbarShadowState } from "../slices/navbarShadowSlice";
import { setnavbarBgState } from "../slices/navbarBgSlice";
import { setlinkColorState } from "../slices/linkColorSlice";
import { useRouter } from "next/router";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const navbarState = useAppSelector((state) => state.navbar.value);
  const navbarShadowState = useAppSelector((state) => state.navbarShadow.value);
  const navbarBg = useAppSelector((state) => state.navbarBg.value);
  const linkColor = useAppSelector((state) => state.linkColor.value);
  const router = useRouter();

  const handleNav = () => {
    dispatch(setnavbarState(!navbarState));
  };

  useEffect(() => {
    if (router.asPath === "/netflix") {
      dispatch(setlinkColorState("#ecf0f3"));
      dispatch(setnavbarBgState("transparent"));
    } else {
      dispatch(setlinkColorState("#1f2937"));
      dispatch(setnavbarBgState("#ecf0f3"));
    }
  }, [router]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 1) {
        dispatch(setnavbarShadowState(true));
      } else {
        dispatch(setnavbarShadowState(false));
      }
    };

    window.addEventListener("scroll", handleShadow);

    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navbarBg}` }}
      className={
        navbarShadowState
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <Link href="/">
          <Image
            src="/../public/assets/logo.png"
            alt="logoNavbar"
            width="50"
            height="50"
            className="cursor-pointer"
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          navbarState
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={
            navbarState
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  src="/../public/assets/logo.png"
                  alt="logoNavbar"
                  width="40"
                  height="40"
                  className="cursor-pointer"
                />
              </Link>

              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                If you imagine it, you can program it
              </p>
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li
                  onClick={() => dispatch(setnavbarState(false))}
                  className="py-4 text-sm"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => dispatch(setnavbarState(false))}
                  className="py-4 text-sm"
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => dispatch(setnavbarState(false))}
                  className="py-4 text-sm"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => dispatch(setnavbarState(false))}
                  className="py-4 text-sm"
                >
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => dispatch(setnavbarState(false))}
                  className="py-4 text-sm"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>

              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
