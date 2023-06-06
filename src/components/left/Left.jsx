import Contact from "./categories/contact/Contact";
import Education from "./categories/education/Education";
import Languages from "./categories/languages/Languages";
import Profile from "./categories/profile/Profile";
import Skills from "./categories/skills/Skills";

const Left = () => {
  return (
    <div className="mobile:px-[5px] tablet:px-3 laptop:px-4">
      <div className="mobile:mb-1 tablet:mb-2">
        <Profile />
      </div>
      <div className="mobile:mb-1 tablet:mb-2">
        <Contact />
      </div>
      <div className="mobile:mb-1 tablet:mb-2">
        <Education />
      </div>
      <div className="mobile:mb-1 tablet:mb-2">
        <Skills />
      </div>
      <div className="mobile:mb-1 tablet:mb-2">
        <Languages />
      </div>
    </div>
  );
};

export default Left;
