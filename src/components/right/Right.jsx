import Activities from "./categories/activities/Activities";
import Achievements from "./categories/achievements/Achievements";
import Interests from "./categories/interests/Interests";

const Right = () => {
  return (
    <div className="mobile:px-3 tablet:px-5">
      <div className="mobile:mb-[3px]">
        <Achievements />
      </div>
      <div className="mobile:mb-[3px]">
        <Activities />
      </div>
      <div className="mobile:mb-[3px]">
        <Interests />
      </div>
    </div>
  );
};

export default Right;
