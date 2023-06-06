const SkillItem = ({ icon, skill, level }) => {
  return (
    <div className="flex items-center justify-start mobile:gap-3 tablet:gap-5 laptop:gap-7">
      <div className="flex items-center justify-start mobile:gap-1 tablet:gap-2">
        <div className="mobile:text-2xs tablet:text-md laptop:text-lg">
          {icon}
        </div>
        <p className="mobile:text-3xs tablet:text-xs laptop:text-sm">{skill}</p>
      </div>
      <div className="mobile:w-10 tablet:w-16 laptop:w-24 mobile:h-[1px] tablet:h-[3px] laptop:h-[4px] bg-white">
        <div
          className={`h-full ${level === "1" && "w-4/5"} ${
            level === "2" && "w-2/3"
          } ${level === "3" && "w-1/2"} bg-blue-400`}
        ></div>
      </div>
    </div>
  );
};

export default SkillItem;
