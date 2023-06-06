import RightTitle from "../../Title";
import { BsMusicNoteBeamed, BsGraphUpArrow, BsCodeSlash } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import { GiBasketballBasket } from "react-icons/gi";
import { ImPencil2 } from "react-icons/im";

const Interests = () => {
  return (
    <div>
      <div className="mobile:mb-[6px] tablet:mb-[12px] laptop:mb-[14px]">
        <RightTitle title="Interests" />
      </div>
      <div className="flex items-center justify-between mobile:text-sm tablet:text-2xl laptop:text-4xl">
        <GiBasketballBasket />
        <BsCodeSlash />
        <ImPencil2 />
        <BsGraphUpArrow />
        <FaRegHandshake />
        <BsMusicNoteBeamed />
      </div>
    </div>
  );
};

export default Interests;
