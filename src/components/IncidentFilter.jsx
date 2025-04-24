import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const options = ["All", "Low", "Medium", "High"];

const IncidentFilter = ({ selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block w-48" ref={dropdownRef}>
      <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Severity</label>
      <div
        className="flex justify-between items-center w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:border-[#c084fc] focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected}</span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md max-h-60 overflow-y-auto">
          {options.map((option) => (
            <div
              key={option}
              className={`px-4 py-2 text-sm hover:bg-[#fae8ff] cursor-pointer ${
                selected === option ? "bg-[#faf5ff] text-[#c084fc] font-medium" : "text-gray-700"
              }`}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IncidentFilter;
