import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const options = [
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
];

const IncidentSort = ({ order, onChange }) => {
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

  const selectedLabel = options.find((o) => o.value === order)?.label;

  return (
    <div className="relative inline-block w-48" ref={dropdownRef}>
      <label className="block text-sm font-medium text-gray-700 mb-1">Sort by Date</label>
      <div
        className="flex justify-between items-center w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:border-[#c084fc] focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedLabel}</span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md">
          {options.map((option) => (
            <div
              key={option.value}
              className={`px-4 py-2 text-sm hover:bg-[#fae8ff] cursor-pointer ${
                order === option.value ? "bg-[#faf5ff] text-[#c084fc] font-medium" : "text-gray-700"
              }`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IncidentSort;
