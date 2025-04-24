import { useState } from "react";

const IncidentItem = ({ incident }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white hover:shadow-md 
    shadow-[#f0abfc] transition duration-200">
  <h2 className="text-xl font-semibold text-gray-800">{incident.title}</h2>
  <div className="text-lg font-bold text-gray-600 mt-1">Severity: <span className={`font-bold ${incident.severity === 'High' ? 'text-red-600' : incident.severity === 'Medium' ? 'text-yellow-600' : 'text-green-600'}`}>{incident.severity}</span></div>
  <div className="text-lg text-gray-500">Reported: <span className="font-bold text-[#0ea5e9]">{new Date(incident.reported_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span></div>
  <button onClick={() => setExpanded(!expanded)} className="font-bold mt-2 text-[#1e40af] hover:text-[#60a5fa]">
    {expanded ? "Hide Details" : "View Details"}
  </button>
  {expanded && <p className="mt-2 text-gray-700">{incident.description}</p>}
</div>

  );
};

export default IncidentItem;
