const LeftTitle = ({ title }) => {
  return (
    <div className="relative mobile:border-b tablet:border-b-2 border-white mobile:mb-[5px] tablet:mb-[6px] laptop:mb-[7px]">
      <h1 className="mobile:ml-1 tablet:ml-3 mobile:text-2xs tablet:text-sm laptop:text-lg font-medium uppercase tracking-wide">
        {title}
      </h1>
      <span className="absolute bottom-0 right-0 mobile:w-8 tablet:w-14 laptop:w-20 mobile:h-[1px] tablet:h-[2px] laptop:h-[3px] bg-white"></span>
    </div>
  );
};

export default LeftTitle;
