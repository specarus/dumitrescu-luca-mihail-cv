import LeftTitle from "../../Title";
import SkillItem from "./SkillItem";
import {
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiTailwindcss,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiGit,
  SiPython,
  SiBlender,
  SiSass,
  SiCplusplus,
  SiExpress,
} from "react-icons/si";

const Skills = () => {
  return (
    <div>
      <div>
        <LeftTitle title="Skills" />
      </div>
      <div className="flex flex-col mobile:gap-[4px] tablet:gap-[6px] laptop:gap-[8px]">
        <SkillItem icon={<SiReact />} skill="ReactJS" level="1" />
        <SkillItem icon={<SiHtml5 />} skill="HTML" level="1" />
        <SkillItem icon={<SiCss3 />} skill="CSS" level="1" />
        <SkillItem icon={<SiSass />} skill="Sass" level="1" />
        <SkillItem icon={<SiNextdotjs />} skill="NextJS" level="1" />
        <SkillItem icon={<SiJavascript />} skill="JavaScript" level="1" />
        <SkillItem icon={<SiNodedotjs />} skill="NodeJS" level="2" />
        <SkillItem icon={<SiTypescript />} skill="TypeScript" level="2" />
        <SkillItem icon={<SiGit />} skill="Git" level="3" />
        <SkillItem icon={<SiPython />} skill="Python" level="3" />
        <SkillItem icon={<SiCplusplus />} skill="C++" level="3" />
        <SkillItem icon={<SiBlender />} skill="Blender" level="3" />
        <SkillItem icon={<SiExpress />} skill="Express" level="2" />
      </div>
    </div>
  );
};

export default Skills;
