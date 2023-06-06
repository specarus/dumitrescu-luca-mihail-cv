import RightTitle from "../../Title.jsx";
import ActivitiesItem from "./ActivitiesItem.jsx";

const Activities = () => {
  return (
    <div>
      <div>
        <RightTitle title="Extracurricular Activities & Leadership Experience" />
      </div>
      <ul className="mobile:text-3xs mobile:pl-[5px] tablet:pl-[16px] laptop:text-sm laptop:pl-[18px] tablet:text-xs list-decimal">
        <li>
          <ActivitiesItem
            period="June 2022 - Present"
            role="English teacher"
            description="This extracurricular activity consisted of teaching English to young children (6-10 years old) in need."
            organization="Sf. Dimitrie Foundation"
            activities={[
              "Created a schedule and curriculum for the learners in my class;",
              "Replaced traditional teaching with interactive games to make learning fun;",
              "Taught the young ones how to spell words, how to pronounce correctly and how to write accordingly;",
              "Provided class materials such as handouts and coloring sheets;",
            ]}
          />
        </li>
        <li>
          <ActivitiesItem
            period="June 2021 - June 2022"
            role="Caretaker and entertainer for refugee children of Ukraine"
            description="This extracurricular activity consisted of entertaining and taking care of children affected by the crisis in Ukraine."
            organization="Kaia Activity Center"
            activities={[
              "Cleaned up and organized their playground;",
              "Drew them towards joining us in playing games such as basketball, board games, chess, etc.",
              "Spent valuable time telling stories and creating connections with the children;",
              "Organized a theatre play and a musical event with traditional music;",
              "Made environment friendly crafts;",
            ]}
          />
        </li>
        <li>
          <ActivitiesItem
            period="October 2022"
            role="Guide"
            description="This extracurricular activity consisted of guiding foreign RMI participants through the city of Bucharest in the period of the competition."
            organization="Romanian Master of Informatics (RMI) 2022"
            activities={[
              "Made sure the participants arrived on time for the competition, to the dormitory and to the canteen;",
              "Showed them the most interesting tourist attractions;",
              "Shared some Romanian traditions;",
              "Supervised the participants during the competition;",
              "Exported them to the airport;",
            ]}
          />
        </li>
      </ul>
    </div>
  );
};

export default Activities;
