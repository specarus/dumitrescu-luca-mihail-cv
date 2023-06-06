const EducationItem = ({ period, category, title }) => {
  return (
    <li className="relative w-full border border-white mobile:p-[3px] tablet:p-[4px]">
      <h3 className="italic mobile:text-3xs tablet:text-xs mobile:h-[9px] tablet:h-[18px] mobile:px-[3px] tablet:px-[4px] mobile:-top-[5px] mobile:-left-[3px] tablet:-top-[8px] tablet:-left-[5px] absolute bg-white text-primary">
        {period}
      </h3>
      <div className="mobile:mt-[3px] tablet:mt-[6px]">
        <h5 className="mobile:text-3xs tablet:text-xs laptop:text-sm font-semibold underline">
          {category}
        </h5>
        <p className="mobile:text-4xs tablet:text-2xs laptop:text-xs">
          {title}
        </p>
      </div>
    </li>
  );
};

export default EducationItem;
