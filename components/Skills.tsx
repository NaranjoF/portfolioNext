import Image from "next/image";
import Skill from "./Skill";
import htmlLogo from "../public/assets/skills/html.png";
import cssLogo from "../public/assets/skills/css.png";
import styledCompLogo from "../public/assets/skills/styledcomponents.png";
import tailwindLogo from "../public/assets/skills/tailwind.png";
import bootstrapLogo from "../public/assets/skills/bootstrap.png";
import javascriptLogo from "../public/assets/skills/javascript.png";
import typescriptLogo from "../public/assets/skills/typescript.png";
import reactLogo from "../public/assets/skills/react.png";
import reduxLogo from "../public/assets/skills/redux.png";
import nextLogo from "../public/assets/skills/nextjs.png";
import nodeLogo from "../public/assets/skills/node.png";
import expressLogo from "../public/assets/skills/express.png";
import firebaseLogo from "../public/assets/skills/firebase.png";
import githubLogo from "../public/assets/skills/github1.png";
import gitLogo from "../public/assets/skills/git.png";
import postgreLogo from "../public/assets/skills/Postgresql.png";
import jestLogo from "../public/assets/skills/jest.svg";
import linuxLogo from "../public/assets/skills/linux.png";
import tlLogo from "../public/assets/skills/rtesl.png";
import clLogo from "../public/assets/skills/ctesl.png";
import cypressLogo from "../public/assets/skills/cypress.webp";
import { useRouter } from "next/router";
import { en, es } from "../lang/translations";

export default function Skills() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  return (
    <div id="skills" className="w-full lg:h-full p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] select-none">
          {t.skills.headerTitle}
        </p>
        <h2 className="py-4 select-none">{t.skills.title}</h2>
        <div className="grid md:grid-cols-x lg:grid-cols-4 gap-8">
          <Skill
            sourceImage={htmlLogo}
            width={"64px"}
            height={"64px"}
            skillName={"HTML"}
          />

          <Skill
            sourceImage={cssLogo}
            width={"64px"}
            height={"64px"}
            skillName={"CSS"}
          />

          <Skill
            sourceImage={styledCompLogo}
            width={"64px"}
            height={"64px"}
            skillName={"Styled Components"}
          />

          <Skill
            sourceImage={tailwindLogo}
            width={"64px"}
            height={"64px"}
            skillName={"Tailwind"}
          />

          <Skill
            sourceImage={bootstrapLogo}
            width={"72px"}
            height={"64px"}
            skillName={"Bootstrap"}
          />

          <Skill
            sourceImage={javascriptLogo}
            width={"64px"}
            height={"64px"}
            skillName={"JavaScript"}
          />

          <Skill
            sourceImage={typescriptLogo}
            width={"64px"}
            height={"64px"}
            skillName={"TypeScript"}
          />

          <Skill
            sourceImage={reactLogo}
            width={"64px"}
            height={"64px"}
            skillName={"React"}
          />

          <Skill
            sourceImage={reduxLogo}
            width={"64px"}
            height={"64px"}
            skillName={"Redux"}
          />

          <Skill
            sourceImage={nextLogo}
            width={"64px"}
            height={"70px"}
            skillName={"Next.js"}
          />

          <Skill
            sourceImage={nodeLogo}
            width={"64px"}
            height={"64px"}
            skillName={"Node.js"}
          />

          <Skill
            sourceImage={expressLogo}
            width={"64px"}
            height={"64px"}
            skillName={"Express.js"}
          />

          <Skill
            sourceImage={firebaseLogo}
            width={"64px"}
            height={"64px"}
            skillName={"Firebase"}
          />

          <Skill
            sourceImage={githubLogo}
            width={"64px"}
            height={"64px"}
            skillName={"Github"}
          />

          <Skill
            sourceImage={gitLogo}
            width={"64px"}
            height={"64px"}
            skillName={"Git"}
          />

          <Skill
            sourceImage={postgreLogo}
            width={"64px"}
            height={"64px"}
            skillName={"PostgreSQL"}
          />

          <Skill
            sourceImage={jestLogo}
            width={"64px"}
            height={"64px"}
            skillName={"Jest"}
          />

          <Skill
            sourceImage={cypressLogo}
            width={"64px"}
            height={"64px"}
            skillName={"Cypress"}
          />

          <Skill
            sourceImage={tlLogo}
            width={"64px"}
            height={"64px"}
            skillName={"React Testing Library"}
          />

          <Skill
            sourceImage={clLogo}
            width={"64px"}
            height={"64px"}
            skillName={"Cypress Testing Library"}
          />

          <Skill
            sourceImage={linuxLogo}
            width={"64px"}
            height={"64px"}
            skillName={"Linux"}
          />
        </div>
      </div>
    </div>
  );
}
