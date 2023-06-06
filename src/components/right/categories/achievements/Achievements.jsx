import RightTitle from "../../Title";
import AchievementsItem from "./AchievementsItem";

const Achievements = () => {
  return (
    <div>
      <div>
        <RightTitle title="Awards & Achievements" />
      </div>
      <ul className="mobile:gap-2">
        <AchievementsItem
          title="CUPA EDU Basketball Championship 2022"
          place="3"
          period="21 November - 18 December 2022"
        />
        <AchievementsItem
          title="Symposium in the memory of the academic professor Solomon Marcus"
          place="1"
          period="May 2023"
        />
        <AchievementsItem title="PHI Physics Competition" period="April 2021" />
      </ul>
    </div>
  );
};

export default Achievements;
