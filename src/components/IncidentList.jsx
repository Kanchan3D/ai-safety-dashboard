import IncidentItem from "./IncidentItem";

const IncidentList = ({ incidents }) => (
  <div className="grid gap-4 mt-4">
    {incidents.map((incident) => (
      <IncidentItem key={incident.id} incident={incident} />
    ))}
  </div>
);

export default IncidentList;
