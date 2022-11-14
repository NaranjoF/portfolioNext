import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useAppSelector, useAppDispatch } from "../hooks";
import { setnavbarState } from "../slices/navbarSlice";
import React, { useEffect, useRef, useState } from "react";
import { setnavbarShadowState } from "../slices/navbarShadowSlice";
import { setnavbarBgState } from "../slices/navbarBgSlice";
import { setlinkColorState } from "../slices/linkColorSlice";
import { setlanSelectorState } from "../slices/lanSelectorSlice";
import { useRouter } from "next/router";
import navbarLogo from "../public/logofinal.png";
import { en, es } from "../lang/translations";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const navbarState = useAppSelector((state) => state.navbar.value);
  const navbarShadowState = useAppSelector((state) => state.navbarShadow.value);
  const navbarBg = useAppSelector((state) => state.navbarBg.value);
  const linkColor = useAppSelector((state) => state.linkColor.value);
  const langState = useAppSelector((state) => state.lanSelector.value);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  const firstSelector = useRef<HTMLOptionElement>(null);
  const secondSelector = useRef<HTMLOptionElement>(null);

  const handleNav = () => {
    dispatch(setnavbarState(!navbarState));
  };

  useEffect(() => {
    const first = firstSelector.current;
    const second = secondSelector.current;

    if (locale === "en") {
      dispatch(setlanSelectorState(true));
    } else if (locale !== "en") {
      dispatch(setlanSelectorState(false));
    }
  }, []);

  useEffect(() => {
    if (
      (router.asPath === "/netflix" || router.asPath === "/portfolio") &&
      window.scrollY === 0
    ) {
      dispatch(setlinkColorState("#ecf0f3"));
      dispatch(setnavbarBgState("transparent"));
    } else {
      dispatch(setlinkColorState("#1f2937"));
      dispatch(setnavbarBgState("#ecf0f3"));
    }
  });

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

  const changeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(router.pathname, router.pathname, {
      locale: e.target.value,
    });
  };

  return (
    <div
      style={{ backgroundColor: `${navbarBg}` }}
      className={
        navbarShadowState
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in duration-300"
          : "fixed w-full h-20 z-[100] ease-in duration-300"
      }
      data-testid="navbar"
    >
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <Link href="/" data-testid="logo-shortcut">
          <div data-testid="logo-navbar">
            <Image
              src={navbarLogo}
              alt="logoNavbar"
              width="50"
              height="50"
              className="cursor-pointer"
            />
          </div>
        </Link>
        <div className="flex justify-center items-center">
          <ul
            style={{ color: `${linkColor}` }}
            className="hidden md:flex"
            data-testid="link-navbar"
          >
            <Link href="/">
              <li
                className="ml-10 text-sm uppercase hover:text-[#5651e5]"
                data-testid="navbar-home"
              >
                {t.navbar.home}
              </li>
            </Link>
            <Link href="/#about">
              <li
                className="ml-10 text-sm uppercase hover:text-[#5651e5]"
                data-testid="navbar-about"
              >
                {t.navbar.about}
              </li>
            </Link>
            <Link href="/#skills">
              <li
                className="ml-10 text-sm uppercase hover:text-[#5651e5]"
                data-testid="navbar-skills"
              >
                {t.navbar.skills}
              </li>
            </Link>
            <Link href="/#projects">
              <li
                className="ml-10 text-sm uppercase hover:text-[#5651e5]"
                data-testid="navbar-projects"
              >
                {t.navbar.projects}
              </li>
            </Link>
            <Link href="/#contact">
              <li
                className="ml-10 text-sm uppercase hover:text-[#5651e5]"
                data-testid="navbar-contact"
              >
                {t.navbar.contact}
              </li>
            </Link>
          </ul>
          <div className="flex justify-center items-center md:hidden">
            <div
              onClick={handleNav}
              data-testid="outline-menu"
              className="cursor-pointer"
            >
              <AiOutlineMenu style={{ color: `${linkColor}` }} size={25} />
            </div>
          </div>
          <a
            href={`/Naranjo Facundo CV ${t.main.cv}.pdf`}
            data-testid="button-download"
            className="whitespace-nowrap p-2 text-gray-100 shadow-x rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] cursor-pointer ml-10 text-sm xxsmax:text-xs"
            download={true}
          >
            DL CV
          </a>
          <select
            onChange={changeLang}
            data-testid="change-lan"
            style={{ color: `${linkColor}` }}
            className="ml-10 text-shadow-sm text-sm bg-transparent uppercase cursor-pointer focus:outline-none"
          >
            <option
              ref={firstSelector}
              className="text-black"
              value={langState ? "en" : "es"}
              data-testid="first-selector"
            >
              {langState ? "EN" : "ES"}
            </option>

            <option
              ref={secondSelector}
              className="text-black"
              value={langState ? "es" : "en"}
              data-testid="second-selector"
            >
              {langState ? "ES" : "EN"}
            </option>
          </select>
        </div>
      </div>

      <div
        className={
          navbarState
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
        data-testid="left-menu-container"
      >
        <div
          className={
            navbarState
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 xsmax:overflow-scroll xxsmax:px-5"
              : "fixed left-[-200%] top-0 p-10 ease-in duration-500"
          }
          data-testid="left-menu"
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <div>
                  <Image
                    src={navbarLogo}
                    alt="logoNavbar"
                    width="40"
                    height="40"
                    className="cursor-pointer"
                  />
                </div>
              </Link>

              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                data-testid="left-menu-close"
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className="border-b border-gray-300 my-4">
              <p className="xs:text-xs sm:text-base w-[85%] md:w-[90%] py-4">
                {t.navbar.phrase}
              </p>
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li
                  onClick={() => dispatch(setnavbarState(false))}
                  className="py-4 text-sm"
                  data-testid="home-left-menu"
                >
                  {t.navbar.home}
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => dispatch(setnavbarState(false))}
                  className="py-4 text-sm"
                  data-testid="about-left-menu"
                >
                  {t.navbar.about}
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => dispatch(setnavbarState(false))}
                  className="py-4 text-sm"
                  data-testid="skills-left-menu"
                >
                  {t.navbar.skills}
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => dispatch(setnavbarState(false))}
                  className="py-4 text-sm"
                  data-testid="projects-left-menu"
                >
                  {t.navbar.projects}
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => dispatch(setnavbarState(false))}
                  className="py-4 text-sm"
                  data-testid="contact-left-menu"
                >
                  {t.navbar.contact}
                </li>
              </Link>
            </ul>
            <div className="xs:pt-5 sm:pt-32">
              <p className="xs:text-xs sm:text-base uppercase tracking-widest text-[#5651e5]">
                {t.navbar.connect}
              </p>

              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/naranjofacundo"
                  data-testid="linkedin-left-menu"
                  target="_blank"
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  title={t.link.linkedin}
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/NaranjoF"
                  target="_blank"
                  data-testid="github-left-menu"
                  title={t.link.github}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaGithub />
                </a>
                <a
                  href="mailto:facundo.naranjo00@gmail.com"
                  target="_blank"
                  title={t.link.mail}
                  data-testid="mail-left-menu"
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <AiOutlineMail />
                </a>
                <a
                  href={`/${t.main.language}contact`}
                  onClick={() => dispatch(setnavbarState(false))}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  title={t.link.contact}
                  data-testid="contact-icon-left-menu"
                >
                  <BsFillPersonLinesFill />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
