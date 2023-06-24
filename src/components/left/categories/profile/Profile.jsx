import LeftTitle from "../../Title";

const Profile = () => {
  return (
    <div className="mobile:text-3xs tablet:text-xs laptop:text-sm">
      <div>
        <LeftTitle title="Profile" />
      </div>
      <p>
        I am a student seeking to fulfill my dream of becoming a full stack web
        developer. I am open-minded and curious, always ready to see other
        perspectives and listen to advice. Furthermore, I like to share my
        already acquired knowledge with those in need. Along with my academic
        pursuits, I am and have been actively involved in extracurricular
        activities with altruistic purposes.
      </p>
      <ul className="mobile:mt-[3px] tablet:mt-1 laptop:mt-[6px]">
        <li>GPA: 9.74/10</li>
        <li>SAT: soon</li>
        <li>CAE: grade A and level C2</li>
        <li>IC3: Pass</li>
      </ul>
    </div>
  );
};

export default Profile;
