import type { NextPage } from "next";
import Main from "../components/Main";
import Head from "next/head";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Facundo Naranjo | Front-End Developer</title>
        <link rel="icon" href="/logofn.ico" />
      </Head>

      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
