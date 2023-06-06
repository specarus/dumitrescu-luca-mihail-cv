import LeftTitle from "../../Title";
import LanguagesItem from "./LanguagesItem";

const Languages = () => {
  return (
    <div>
      <div>
        <LeftTitle title="Languages" />
      </div>
      <div className="flex flex-col mobile:gap-1">
        <LanguagesItem language="Romanian" level="native" />
        <LanguagesItem language="English" level="advanced" />
        <LanguagesItem language="German" level="intermediate" />
      </div>
    </div>
  );
};

export default Languages;
