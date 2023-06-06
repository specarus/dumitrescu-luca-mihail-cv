import LeftTitle from "../../Title";
import EducationItem from "./EducationItem";

const Education = () => {
  return (
    <div>
      <div>
        <LeftTitle title="Education" />
      </div>
      <ul className="flex flex-col mobile:gap-2 tablet:gap-3 items-center justify-center mobile:mt-2 tablet:mt-3">
        <EducationItem
          period="2016 - 2020"
          category="Secondary School"
          title="Secondary School No. 194"
        />
        <EducationItem
          period="2020 - 2024"
          category="High School"
          title="Tudor Vianu National College of Computer Science"
        />
      </ul>
    </div>
  );
};

export default Education;
