import { HiLanguage } from "react-icons/hi2";

const LanguagesItem = ({ language, level }) => {
  return (
    <div>
      <div>
        <p className="mobile:text-3xs tablet:text-xs laptop:text-sm flex items-center mobile:gap-[4px]">
          <HiLanguage />
          {language}
        </p>
        <div className="flex items-center mobile:gap-2 tablet:gap-4">
          <div className="mobile:w-24 tablet:w-36 laptop:w-44 bg-white mobile:h-[1px] tablet:h-[3px] laptop:h-[4px]">
            <div
              className={`h-full bg-blue-400 ${level === "native" && "w-4/5"} ${
                level === "advanced" && "w-2/3"
              } ${level === "intermediate" && "w-1/2"}`}
            ></div>
          </div>
          <p className="mobile:text-4xs tablet:text-2xs laptop:text-xs border mobile:h-[9px] tablet:h-[17px] laptop:h-[21px] border-white mobile:px-[3px] laptop:px-[4px] uppercase font-medium">
            {level}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LanguagesItem;
