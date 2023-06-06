const RightTitle = ({ title }) => {
  return (
    <div className="relative mobile:border-b tablet:border-b-2 border-primary text-primary font-medium mobile:mb-[5px] tablet:mb-[6px] laptop:mb-[7px]">
      <h1 className="mobile:text-2xs tablet:text-sm laptop:text-lg">{title}</h1>
      <span className="absolute right-0 bottom-0 mobile:w-12 tablet:w-20 laptop:w-24 mobile:h-[1px] tablet:h-[2px] bg-primary"></span>
    </div>
  );
};

export default RightTitle;
