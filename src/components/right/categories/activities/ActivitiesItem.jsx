const ActivitiesItem = ({
  organization,
  role,
  activities,
  description,
  period,
}) => {
  return (
    <div className="flex flex-col">
      <div>
        <p className="font-semibold">Organization:</p>
        <div className="flex flex-col">
          <h4>{organization}</h4>
          <p className=" italic text-primary">({period})</p>
        </div>
      </div>
      <p>
        <span className="font-semibold">My role:</span> {role}
      </p>
      <div>
        <p className="font-semibold">Description:</p>
        <h4>{description}</h4>
      </div>
      <div>
        <p className="font-semibold">Tasks involved:</p>
        <ul>
          {activities.map((a) => {
            return <li key={a}>- {a}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ActivitiesItem;
