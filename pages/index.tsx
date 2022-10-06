import type { NextPage } from "next";
import Main from "../components/Main";
import Head from "next/head";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Facundo Naranjo | Front-End Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
