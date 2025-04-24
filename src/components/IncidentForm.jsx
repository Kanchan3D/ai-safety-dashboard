import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { toast } from "react-toastify";

const severities = ["Low", "Medium", "High"];

const IncidentForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("Low");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return toast.error("All fields are required.");
    onSubmit({ title, description, severity , reported_at: new Date().toISOString() });
    setTitle("");
    setDescription("");
    setSeverity("Low");
    return toast.success("Incident reported successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 mt-8 bg-white border border-gray-200 rounded-lg shadow-sm space-y-4 hover:shadow-md shadow-[#f0abfc]"
    >
      <h3 className="text-xl font-bold text-gray-800">Report New Incident</h3>

      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 border border-gray-300 rounded focus:outline-[#e879f9] hover:border-[#c084fc]"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        className="w-full p-2 border border-gray-300 rounded resize-none focus:outline-[#e879f9] hover:border-[#c084fc]"
        rows="4"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* Custom Severity Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <label className="block text-sm font-medium text-gray-700 mb-1">Severity</label>
        <div
          className="flex justify-between items-center px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:border-[#c084fc]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{severity}</span>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>

        {isOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md">
            {severities.map((level) => (
              <div
                key={level}
                className={`px-4 py-2 text-sm hover:bg-[#fae8ff] cursor-pointer ${
                  severity === level ? "bg-[#faf5ff] text-[#c084fc] font-medium" : "text-gray-700"
                }`}
                onClick={() => {
                  setSeverity(level);
                  setIsOpen(false);
                }}
              >
                {level}
              </div>
            ))}
          </div>
        )}
      </div>

      <button
        type="submit"
        className="bg-[#c084fc] hover:bg-[#a855f7] text-white px-4 py-2 rounded transition"
      >
        Submit
      </button>
    </form>
  );
};

export default IncidentForm;
