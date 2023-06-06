import LeftTitle from "../../Title";
import { BsEnvelopePaperFill, BsLinkedin } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import ContactItem from "./ContactItem";

const Contact = () => {
  return (
    <div>
      <div>
        <LeftTitle title="Contact" />
      </div>
      <ul className="flex flex-col mobile:gap-1 mobile:mt-[5px] laptop:gap-2">
        <ContactItem
          icon={
            <ImLocation2 className="mobile:text-2xs tablet:text-sm laptop:text-lg" />
          }
          content="Bucharest, Romania"
        />
        <ContactItem
          icon={
            <FaPhone className="mobile:text-2xs tablet:text-sm laptop:text-lg" />
          }
          content="lucadumi07@gmail.com"
        />
        <ContactItem
          icon={
            <BsEnvelopePaperFill className="mobile:text-2xs tablet:text-sm laptop:text-lg" />
          }
          content="+40729370845"
        />
      </ul>
    </div>
  );
};

export default Contact;
