const AchievementsItem = ({ title, period, place }) => {
  return (
    <li className="mobile:text-3xs tablet:text-xs laptop:text-sm">
      <div className="flex items-center gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-semibold">
            {title} {place && "- "}
            {place && place}
            <span>
              {place === "3" && "rd"}
              {place === "1" && "st"}
            </span>
          </h3>
        </div>
      </div>
      <p className="italic text-primary">({period})</p>
    </li>
  );
};

export default AchievementsItem;
